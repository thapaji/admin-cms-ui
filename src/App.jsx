import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";
import { AdminLayout } from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/user/Profile";
import Admins from "./pages/user/Admins";
import Reviews from "./pages/reviews/Reviews";
import Orders from "./pages/orders/Orders";
import Categories from "./pages/category/Categories";
import Users from "./pages/user/Users";
import Products from "./pages/product/Products";
import { Auth } from "./components/auth/Auth";
import { useDispatch } from "react-redux";
import { autoLogin } from "./features/users/userAction";
import ForgetPassword from "./pages/user/ForgetPassword";
import ChangePassword from "./pages/user/ChangePassword";
import AddNewProduct from "./pages/product/AddNewProduct";
import EditProduct from "./pages/product/EditProduct";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <>
      <Routes>
        /************** Public Routes ****************/
        <Route path="/" element={<Login />} />
        <Route path="/verify-user" element={<UserVerification />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        /************** Private Routes ****************/
        <Route
          path="/"
          element={
            <Auth>
              <AdminLayout />
            </Auth>
          }
        >
          <Route path="/admin/new" element={<Register />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/product/new" element={<AddNewProduct />} />
          <Route path="/admin/product/edit/:_id" element={<EditProduct />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/reviews" element={<Reviews />} />
          <Route path="/admin/admins" element={<Admins />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
