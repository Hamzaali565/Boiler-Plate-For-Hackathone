import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Context";
import Cloudinary from "../../components/Cloudinary";
import BottomBar from "./Bottombar";
import Navbar from "./Navbar";

const Account = () => {
  let { state, dispatch } = useContext(GlobalContext);

  const homeOut = async () => {
    try {
      let response = await axios.post(
        `${state.baseUrl}/api/v1/logout`,
        {},
        { withCredentials: true }
      );
      console.log("res", response);
      dispatch({
        type: "USER_LOGOUT",
      });
    } catch (e) {
      console.log("e: ", e);
    }
  };
  return (
    <Box sx={{ marginBottom: "50px" }}>
      <Box sx={{ paddingX: "30px" }}>
        {/* <Navbar/> */}
        <Typography
          variant="h5"
          sx={{
            color: "blue",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Settings
        </Typography>
        {/* Avatar */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Box
            sx={{
              border: "1px solid darkgray",
              borderWidth: "3px",
              height: "160px",
              width: "160px",
              borderRadius: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ height: "150px", width: "150px" }}
            />
          </Box>
        </Box>

        {/* Update Name */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <TextField
            id="standard-multiline-flexible"
            label="Update Full Name"
            multiline
            sx={{ minWidth: "200px" }}
            maxRows={4}
            variant="standard"
          />
        </Box>

        {/* imageUpload */}
        <Box
          sx={{
            bgcolor: "darkgray",
            padding: "2em 0",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <Cloudinary />
        </Box>

        {/* Add new Category */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <input
            placeholder="New Cargory Name"
            style={{
              width: "300px",
              borderRadius: "10px",
              border: "1px",
              backgroundColor: "darkgray",
            }}
          />
          <Button
            sx={{ bgcolor: "green", color: "white", borderRadius: "10px" }}
          >
            ADD
          </Button>
        </Box>

        {/* All categories */}
        {/* 1 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>
        {/* 2 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>
        {/* 3 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>
        {/* 4 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>
        {/* 5 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>
        {/* 6 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>
        {/* 7 */}
        <Box>
          <Box
            sx={{
              border: "1px solid green",
              marginTop: "20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{}}
            />
            <Typography
              sx={{ color: "green", fontWeight: 900, paddingX: "30px" }}
            >
              Fruits
            </Typography>
          </Box>
        </Box>

        {/* LogOut */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            bgcolor: "green",
            marginTop: "10px",
            //   padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Button sx={{ color: "white", fontSize: "25px" }} onClick={homeOut}>
            Logout
          </Button>
        </Box>
      </Box>

      <BottomBar />
    </Box>
  );
};

export default Account;
