import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const AllProduct = () => {
  return (
    <Box>
      <Navbar />
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px ",
          color: "blue",
          //   bgcolor: "blue",
        }}
      >
        All Products
      </Typography>
      <Box sx={{ paddingX: "10px" }}>
        <Box
          sx={{
            border: "1px solid green",
            display: "flex",
            borderRadius: "10px",
            justifyContent: "space-between",
            padding: "10px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                lineHeight: "30px",
                //   paddingRight: "10em",
                color: "green",
                fontSize: "30px",
              }}
            >
              Apple
            </Typography>
            <Typography variant="h6" sx={{ color: "gray" }}>
              1. Kg
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "gray" }}>
              $2.1
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllProduct;
