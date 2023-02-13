import express from "express";
import { stringToHash, varifyHash } from "bcrypt-inzi";
import jwt from "jsonwebtoken";
import path from "path";
import cors from "cors";
mongoose.set("strictQuery", true);
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5005;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);

const SECRET = process.env.SECRET || "topsecret";
//------Schemas------//

//---userSchema---//
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  contact: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },

  createdOn: { type: Date, default: Date.now },
});
export const userModel = mongoose.model("Users", userSchema);

// ----Product-schema===//
let productSchema = new mongoose.Schema({
  // url: { type: String },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  unitName: { type: String, required: true },
  price: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now },
  // owner: {type: mongoose.ObjectId, required: true},
  // isDeleted: {type: Boolean, default: false},
});
export const productModel = mongoose.model("products", productSchema);

//-----signup-----//
app.post("/api/v1/signup", (req, res) => {
  let body = req.body;

  if (!body.firstName || !body.contact || !body.email || !body.password) {
    res.status(400).send({ message: "Required Parameters Are Missing" });
    return;
  }

  req.body.email = req.body.email.toLowerCase();

  // check if user already exist // query email user
  userModel.findOne({ email: body.email }, (err, user) => {
    if (!err) {
      console.log("user: ", user);

      if (user) {
        // user already exist
        console.log("user already exist: ", user);
        res
          .status(400)
          .send({ message: "user already exist please try a different email" });
        return;
      } else {
        // user not already exist

        // bcrypt hash
        stringToHash(body.password).then((hashString) => {
          userModel.create(
            {
              firstName: body.firstName,
              lastName: body.lastName,
              email: body.email,
              password: hashString,
            },
            (err, result) => {
              if (!err) {
                console.log("data saved: ", result);
                res.status(201).send({ message: "user is created" });
              } else {
                console.log("db error: ", err);
                res.status(500).send({ message: "internal server error" });
              }
            }
          );
        });
      }
    } else {
      console.log("db error: ", err);
      res.status(500).send({ message: "db error in query" });
      return;
    }
  });
});
//------login-----//
app.post("/api/v1/login", (req, res) => {
  let body = req.body;
  body.email = body.email.toLowerCase();

  if (!body.email || !body.password) {
    // null check - undefined, "", 0 , false, null , NaN
    res.status(400).send({
      message: "Reqiured Parameters are Missing",
    });
    return;
  }

  // check if user exist
  userModel.findOne(
    { email: body.email },
    "firstName lastName email password admin",
    (err, data) => {
      if (!err) {
        console.log("data: ", data);

        if (data) {
          // user found
          varifyHash(body.password, data.password).then((isMatched) => {
            console.log("isMatched: ", isMatched);

            if (isMatched) {
              const token = jwt.sign(
                {
                  _id: data._id,
                  email: data.email,
                  iat: Math.floor(Date.now() / 1000) - 30,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                },
                SECRET
              );

              console.log("token: ", token);

              res.cookie("Token", token, {
                maxAge: 86_400_000,
                httpOnly: true,
                sameSite: "none",
                secure: true,
              });

              res.send({
                message: "login successful",
                profile: {
                  email: data.email,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  admin: data.admin,
                  age: data.age,
                  _id: data._id,
                },
              });
              return;
            } else {
              console.log(err);
              res.status(401).send({ message: "Incorrect email or password" });
              return;
            }
          });
        } else {
          // user not already exist
          console.log("user not found");
          res.status(401).send({ message: "Incorrect email or password" });
          return;
        }
      } else {
        console.log("db error: ", err);
        res.status(500).send({ message: "login failed, please try later" });
        return;
      }
    }
  );
});
//-----logout-----//
app.post("/api/v1/logout", (req, res) => {
  res.cookie("Token", "", {
    maxAge: 1,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.send({ message: "Logout successful" });
});
//---check-token----//
app.use("/api/v1", (req, res, next) => {
  console.log("req.cookies:", req.cookies);

  if (!req?.cookies?.Token) {
    res.status(401).send({
      message: "include http-only credentials with every request",
    });
    return;
  }

  jwt.verify(req.cookies.Token, SECRET, function (err, decodedData) {
    if (!err) {
      console.log("decodedData: ", decodedData);

      const nowDate = new Date().getTime() / 1000;

      if (decodedData.exp < nowDate) {
        res.status(401);
        res.cookie("Token", "", {
          maxAge: 1,
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        res.send({ message: "token expired" });
      } else {
        console.log("token approved");

        req.body.token = decodedData;
        next();
      }
    } else {
      res.status(401).send("invalid token");
    }
  });
});

// ---AddProduct---//
app.post("/api/v1/product", (req, res) => {
  const body = req.body;

  if (
    // validation
    // !body.url &&
    !body.name &&
    !body.category &&
    !body.description &&
    !body.unitName &&
    !body.price
  ) {
    res.status(400).send({
      message: "required parameters missing",
    });
    return;
  }
  productModel.create(
    {
      name: body.name,
      price: body.price,
      description: body.description,
      url: body.url,
      owner: new mongoose.Types.ObjectId(body.token._id),
      unitName: body.unitName,
      category: body.category,
    },
    (err, saved) => {
      if (!err) {
        console.log(err);

        res.send({
          message: "product added successfully",
          // data: data,
        });
      } else {
        console.log(err);
        res.status(500).send({
          message: "server error",
        });
      }
    }
  );
});

//---getAllData---//
app.get("/api/v1/products", (req, res) => {
  // const userId = new mongoose.Types.ObjectId(req.body.token._id);
  productModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all products successfully",
        data: data,
      });
    } else {
      console.log(err);
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

//---UPDATE_USER---//
app.put("/api/v1/name/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  if (!body.name) {
    res.status(400).send({
      message: "Required Parameters Are Missings",
    });
    return;
  }
  try {
    let data = await userModel
      .findByIdAndUpdate(
        id,
        {
          firstName: body.name,
        },
        { new: true }
      )
      .exec();
    console.log("updated: ", data);
    res.send({
      message: "Name modified successfully",
      data: data,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      message: "server error",
    });
  }
});
///---Redirect-To-Home-If-Token---///
const getUser = async (req, res) => {
  let _id = "";
  if (req.params._id) {
    _id = req.params._id;
  } else {
    _id = req.body.token._id;
  }

  try {
    const user = await userModel
      .findOne({ _id: _id }, "email firstName lastName -_id")
      .exec();

    if (!user) {
      res.status(404).send({
        message: "unsuccessfull response",
      });
      return;
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      message: "server error",
    });
  }
};
app.get("/api/v1/profile", getUser);
app.get("/api/v1/profile/:id", getUser);
//-------------------//
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./Frontend/build")));
app.use("*", express.static(path.join(__dirname, "./Frontend/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

///------mongooseThings------///
const mongodbURI =
  process.env.mongodbURI ||
  "mongodb+srv://CRUD:hamzaali565@cluster0.kh990zg.mongodb.net/Saylani?retryWrites=true&w=majority";
/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Database is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
