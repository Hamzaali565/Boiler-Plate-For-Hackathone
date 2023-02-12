import { AppBar, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        padding: "10px",
        bgcolor: "white",
        display: "flex",
        position: "sticky",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box sx={{ marginLeft: "10px", paddingTop: "7px" }}>
          <Typography variant="h6" sx={{ color: "blue", lineHeight: "10px" }}>
            Mr.Admin
          </Typography>
          <Typography variant="h6" sx={{ color: "green", fontSize: "15px" }}>
            Admin
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
