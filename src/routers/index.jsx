import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Auth from "../pages/auth/Auth";
import CreateProduct from "@/pages/admin/create-product/CreateProduct";
import ManageProduct from "@/pages/admin/manage-product/ManageProduct";
import Category from "@/pages/admin/category/Category";
import Shop from "@/pages/shop/Shop";
import Product from "@/pages/product/Product";
import Contact from "@/pages/contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Auth />}>
        <Route path="admin" element={<Admin />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
