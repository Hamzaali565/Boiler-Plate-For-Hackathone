import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
const Cloudinary = () => {
  const [pic, setPic] = useState(null);
  let { state, dispatch } = useContext(GlobalContext);

  const send = async (e) => {
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", pic);
    cloudinaryData.append("upload_preset", "postingApp");
    cloudinaryData.append("cloud_name", "dozqa9pai");
    // console.log(cloudinaryData);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`,
        cloudinaryData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then(async (res) => {
        console.log("from then", res.data.url);
        dispatch({
          type: "IMAGE_URL",
          payload: res.data.url,
        });
      })
      .catch((err) => {
        console.log("from catch", err);
      });
    e.preventDefault();
  };
  return (
    <>
      {/* <div>Hello World</div>
      <form onSubmit={send}>
        <input
          id="inputTag"
          type="file"
          required
          onChange={(e) => {
            setPic(e.currentTarget.files[0]);
          }}
        />
        <button type="submit">Post</button>
      </form> */}
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          hidden
          accept="image/*"
          type="file"
          required
          onChange={(e) => {
            setPic(e.currentTarget.files[0]);
          }}
        />
        <PhotoCameraIcon sx={{ fontSize: "80px", color: "gray" }} />
      </IconButton>
    </>
  );
};

export default Cloudinary;
