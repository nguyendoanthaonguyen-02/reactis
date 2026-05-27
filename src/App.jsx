import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowProduct from "./components/ShowProduct";
import Gioithieu from "./pages/Gioithieu";
import Sanpham from "./pages/Sanpham";
import Home from "./pages/Home";
import Tintuc from "./pages/Tintuc";
import Lienhe from "./pages/Lienhe";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import KhachHang from "./components/KhachHang";
export default function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/index" element={<Home />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/sanpham" element={<Sanpham />} />
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/khach-hang" element={<KhachHang />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/giohang" element={<Cart />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}