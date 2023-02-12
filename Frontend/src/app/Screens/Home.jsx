import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import Cloudinary from "../components/Cloudinary";

const Home = () => {
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state.image);

  return (
    <>
      <Cloudinary />
    </>
  );
};

export default Home;
