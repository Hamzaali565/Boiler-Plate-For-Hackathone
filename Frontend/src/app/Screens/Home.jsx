import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import Cloudinary from "../components/Cloudinary";

const Home = () => {
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state.image);
  // const [pic, setPic] = useState(null);

  // const send = async (e) => {
  //   const cloudinaryData = new FormData();
  //   cloudinaryData.append("file", pic);
  //   cloudinaryData.append("upload_preset", "postingApp");
  //   cloudinaryData.append("cloud_name", "dozqa9pai");
  //   // console.log(cloudinaryData);
  //   axios
  //     .post(
  //       `https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`,
  //       cloudinaryData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     )
  //     .then(async (res) => {
  //       console.log("from then", res.data.url);
  //     })
  //     .catch((err) => {
  //       console.log("from catch", err);
  //     });
  //   e.preventDefault();
  // };
  return (
    <>
      {/* <div>Hello World</div>
      <form>
        <input
          id="inputTag"
          type="file"
          onChange={(e) => {
            setPic(e.currentTarget.files[0]);
          }}
        />
        <button onClick={send}>Post</button>
      </form> */}
      <Cloudinary />
    </>
  );
};

export default Home;
