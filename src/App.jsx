import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./components/Main";
import Footer from "./components/Footer";
import ShowProduct from "./components/ShowProduct";
import Gioithieu from "./pages/Gioithieu";
import Sanpham from "./pages/Sanpham";
// import Lienhe from "./pages/Tintuc";
import Tintuc from "./pages/Tintuc";
import Detail from "./pages/Detail";
export default function App() {
  
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route exact path="/index" element={<Index />} />
        <Route path="/gioithieu" element={<Gioithieu/>} />
        <Route path="/tintuc" element={<Tintuc/>} />
        <Route path="/sanpham" element={<Sanpham />} />     
        <Route path="/detail/:id" element={<Detail/>}/>
         <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}