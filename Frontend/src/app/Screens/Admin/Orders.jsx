import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const Orders = () => {
  return (
    <Box>
      <Navbar />

      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ color: "blue" }}>
          Orders
        </Typography>
        {/*  */}
        <Box sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>Hamza Ali</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Just Now - Pending</Typography>
            <Typography>0890075601</Typography>
          </Box>

          <Typography>2 x Apple</Typography>
          <Typography>2 x banana</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Total</Typography>
            <Typography>pkr 185.00</Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "darkgray",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Change status"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                border: "none",
              }}
            />
          </Box>

          <Box sx={{ border: "1px solid gray", marginTop: "10px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;
