import React from "react";
import { Stack } from "react-bootstrap";
import { CiShoppingTag } from "react-icons/ci";
import { FaUserSecret, FaUsers } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineDashboardCustomize, MdOutlineRateReview } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Stack gap={1} className="ms-3">
      <hr />
      <div className="p-2">
        <Link className="nav-link" to="admin/dashboard">
        <MdOutlineDashboardCustomize /><label>Dashboard</label>
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="admin/categories">
        <TbCategoryFilled />Category
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="admin/product">
        <CiShoppingTag />Product
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="admin/users">
        <FaUsers />Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="admin/orders">
        <LuShoppingBag />Orders
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="admin/reviews">
        <MdOutlineRateReview />Reviews
        </Link>
      </div>
      <hr />
      <div className="p-2">
        <Link className="nav-link" to="/admin/admins">
        <FaUserSecret />Admins
        </Link>
      </div>
    </Stack>
  );
};
