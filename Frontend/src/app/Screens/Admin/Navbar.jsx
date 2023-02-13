import { AppBar, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/Context";

const Navbar = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let navigate = useNavigate();

  const replace = () => {
    let path = `/orders`;
    navigate(path);
  };
  return (
    <AppBar
      sx={{
        padding: "10px",
        bgcolor: "white",
        // display: "flex",
        position: "sticky",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box sx={{ marginLeft: "10px", paddingTop: "7px" }}>
            <Typography variant="h6" sx={{ color: "blue", lineHeight: "10px" }}>
              {state.user.firstName}
            </Typography>
            <Typography variant="h6" sx={{ color: "green", fontSize: "15px" }}>
              Admin
            </Typography>
          </Box>
        </Box>
        <Box
          onClick={() => {
            replace();
          }}
        >
          <ReorderIcon sx={{ color: "black", fontSize: "30px" }} />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
