import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

const App = () => {
  return (
    <>
      <Routes>
        /************** Public Routes ****************/
        <Route path="/" element={<Login />} />
        /************** Public Routes ****************/
        <Route path="/admin/new" element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
