import logo from "./logo.svg";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Box, createTheme, Stack } from "@mui/material";
import Login from "./app/Screens/Login";
import Signup from "./app/Screens/Signup";
import Home from "./app/Screens/Home";
import { GlobalContext } from "./context/Context";
import Navbar from "./app/Screens/Admin/Navbar";
import AllProduct from "./app/Screens/Admin/AllProduct";
import AddProduct from "./app/Screens/Admin/AddProduct";
import Account from "./app/Screens/Admin/Account";

function App() {
  let { state, dispatch } = useContext(GlobalContext);

  //---Login Check on visit---//
  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(`${state.baseUrl}/api/v1/profile`, {
          withCredentials: true,
        });
        dispatch({
          type: "USER_LOGIN",
          payload: response.data,
        });
      } catch {
        dispatch({
          type: "USER_LOGOUT",
        });
      }
    };
    getProfile();
  }, []);

  return (
    <Stack>
      {state.isLogin === true ? (
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : null}
      {state.isLogin === false ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      ) : null}
      {state.isLogin === null ? <Login /> : null}
    </Stack>
  );
}

export default App;
