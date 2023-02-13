import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/Context";
import BottomBar from "./Bottombar";
import Navbar from "./Navbar";

const AllProduct = () => {
  let { state, dispatch } = useContext(GlobalContext);
  const [ray1, setRay1] = useState([]);
  const getAllPost = () => {
    // setLoader(true);
    axios
      .get(`${state.baseUrl}/api/v1/products`, { withCredentials: true })
      .then((response) => {
        // setLoader(false);
        console.log("allDAta", response.data.data.reverse());
        setRay1(response.data.data);
        // console.log("setRay1 :", ray1);
      })
      .catch((err) => {
        console.log("err", err);
        // setLoader(false)
        // setOpens(true)
        // setMtype("error")
        // setMessages("Server Error Please try Later")
      });
  };

  useEffect(() => {
    getAllPost();
  }, []);

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
      <Box sx={{ marginBottom: "100px" }}>
        {ray1.map((eachitem, i) => (
          <Box sx={{ paddingX: "10px" }} key={eachitem._id}>
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
                  {eachitem.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  {eachitem.price} Kg
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  Pkr {eachitem.price}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <BottomBar />
    </Box>
  );
};

export default AllProduct;
