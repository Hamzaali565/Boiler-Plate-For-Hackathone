import { Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import Cloudinary from "../components/Cloudinary";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Home = () => {
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state.image);

  return (
    <Box sx={{ marginTop: "30px", paddingX: "30px" }}>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: "green", lineHeight: "15px" }}>
            SAYLANI WELFARE
          </Typography>
          <Typography sx={{ color: "blue" }}>DISCOUNT STORE</Typography>
        </Box>
        <Box>
          <ShoppingCartIcon />
        </Box>
      </Box>
      {/* imageBanner */}
      <Box sx={{ marginTop: "20px" }}>
        <img
          src="https://www.shutterstock.com/image-photo/phone-basket-vegetables-on-white-260nw-1089584162.jpg"
          // alt=""
          style={{ width: "100%", height: "300px" }}
        />
      </Box>
      {/* Search */}
      <Box
        sx={{ bgcolor: "darkgray", marginTop: "20px", borderRadius: "10px" }}
      >
        <input
          placeholder="Search By Product Name"
          style={{
            border: "none",
            padding: "15px",
            width: "100%",
            backgroundColor: "transparent",
          }}
        />
      </Box>
      {/* Shop By category */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box>
            <img
              src="https://images.herzindagi.info/image/2022/Nov/winter-fruits.jpg"
              height="100px"
              width="100px"
              alt=""
            />
          </Box>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "green" }}
          >
            Vegetables
          </Typography>
        </Box>

        <Box>
          <Box>
            <img
              src="https://images.herzindagi.info/image/2022/Nov/winter-fruits.jpg"
              height="100px"
              width="100px"
              alt=""
            />
          </Box>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "green" }}
          >
            Grocery
          </Typography>
        </Box>

        <Box>
          <Box>
            <img
              src="https://images.herzindagi.info/image/2022/Nov/winter-fruits.jpg"
              height="100px"
              width="100px"
              alt=""
            />
          </Box>
          <Typography
            sx={{ display: "flex", justifyContent: "center", color: "green" }}
          >
            Fruits
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
