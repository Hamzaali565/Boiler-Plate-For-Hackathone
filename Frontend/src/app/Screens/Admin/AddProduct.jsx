import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/Context";
import Cloudinary from "../../components/Cloudinary";
import BottomBar from "./Bottombar";
import Navbar from "./Navbar";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const AddProduct = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategoty] = useState("");
  const [unitName, setUnitName] = useState("");
  const [pic, setPic] = useState("");
  let { state, dispatch } = useContext(GlobalContext);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  let Objs = {
    url: pic,
    name,
    category,
    description,
    unitName,
    price,
  };
  const HandleSubmit = (e) => {
    // e.preventDefault();
    axios
      .post(`${state.baseUrl}/api/v1/product`, Objs, { withCredentials: true })
      .then((response) => {
        console.log(response);
        alert("Product Added Succesfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ color: "blue" }}>
          Add new Item
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <form onSubmit={HandleSubmit}>
            {/*add image */}
            <Box
              sx={{
                bgcolor: "darkgray",
                padding: "3em 0",
                display: "flex",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <Cloudinary
                // onSubmit={send}
                onChange={(e) => {
                  setPic(e.currentTarget.files[0]);
                }}
              />
            </Box>

            {/* Item name */}
            <Box
              sx={{
                bgcolor: "darkgray",
                padding: "20px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <input
                placeholder="Item Name"
                required
                onChange={(e) => setName(e.target.value)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  borderInlineColor: "darkgray",
                  width: "100%",
                }}
              />
            </Box>

            {/* Category */}
            <Box
              sx={{
                bgcolor: "darkgray",
                paddingY: "20px",
                paddingX: "20px",
                marginTop: "10px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                placeholder="category"
                required
                onChange={(e) => setCategoty(e.target.value)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  borderInlineColor: "darkgray",
                  width: "100%",
                }}
              />
            </Box>

            {/* Description */}
            <Box
              sx={{
                bgcolor: "darkgray",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            >
              <TextField
                id="outlined-multiline-static"
                //   label="Multiline"
                multiline
                placeholder="Describe The item"
                onChange={(e) => setDescription(e.target.value)}
                sx={{ width: "100%" }}
                rows={3}
                defaultValue="Default Value"
              />
            </Box>

            {/* Unit Name */}
            <Box
              sx={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6" sx={{ color: "blue" }}>
                User Name:
              </Typography>
              <Box
                sx={{
                  backgroundColor: "darkgray",
                  padding: "20px ",
                  borderRadius: "10px",
                }}
              >
                <input
                  placeholder="Pcs./Kg/dozen"
                  onChange={(e) => setUnitName(e.target.value)}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
            {/* Unit Price */}
            <Box
              sx={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6" sx={{ color: "blue" }}>
                Unit Price:
              </Typography>
              <Box
                sx={{
                  backgroundColor: "darkgray",
                  padding: "20px ",
                  borderRadius: "10px",
                }}
              >
                <input
                  placeholder="Pkr 3.22"
                  onChange={(e) => setPrice(e.target.value)}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>

            {/* Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                marginBottom: "60px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "green",
                  padding: "10px 0",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <Button sx={{ color: "white" }} onClick={HandleSubmit}>
                  Add Product
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <BottomBar />
    </Box>
  );
};

export default AddProduct;
