import { useState, useContext } from "react";
import axios from "axios";
import {
  Alert,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../../context/Context";

const Cont = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});
const FieldCont = styled(Box)({
  border: "3px solid green",
  padding: "30px 70px 30px 70px",
  margin: "10px",
  // height: "380px",
  // marginBottom: "50px",
  borderRadius: "20px",
});

function Signup() {
  let { state, dispatch } = useContext(GlobalContext);
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [opens, setOpens] = useState(false);
  const [mtype, setMtype] = useState("");
  const [messages, setMessages] = useState("");
  let navigate = useNavigate();
  const SignupHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        `${state.baseUrl}/api/v1/signup`,
        {
          firstName: name,
          contact: contact,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      let path = `/login`;
      navigate(path);
    } catch (e) {
      console.log("e: ", e);
      setOpens(true);
      setMtype("error");
      setMessages(e.response.data.message);
    }
  };
  const handleClose = (event, reason) => {
    // e.preventDefault();
    if (reason === "clickaway") {
      return;
    }

    setOpens(false);
  };
  // e.reset();

  return (
    <div>
      <Cont>
        <FieldCont>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            SAYLANI WELFARE
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            ONLINE DISCOUNT STORE
          </Typography>
          <form onSubmit={SignupHandler} style={{ paddingLeft: "40px" }}>
            <TextField
              sx={{ mt: "10px" }}
              className="TextField"
              id="name"
              label="Full Name"
              variant="outlined"
              type="name"
              name="username"
              autoComplete="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <TextField
              sx={{ mt: "10px" }}
              className="TextField"
              id="Contact"
              label="Contact"
              variant="outlined"
              type="number"
              name="contact"
              autoComplete="contact"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <br />
            <TextField
              sx={{ mt: "10px" }}
              className="TextField"
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="username"
              placeholder="email"
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <br />
            <TextField
              sx={{ mt: "10px" }}
              className="TextField"
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              name="current-password"
              autoComplete="new-password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />

            <Box sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" type="submit">
                Signup
              </Button>
            </Box>
            <Box sx={{ mt: "10px" }}>
              <Typography variant="p">
                Already have an account?<Link to={`/`}>Login</Link>{" "}
              </Typography>
            </Box>
          </form>
        </FieldCont>
      </Cont>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={opens} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={mtype} sx={{ width: "100%" }}>
            {messages}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default Signup;
