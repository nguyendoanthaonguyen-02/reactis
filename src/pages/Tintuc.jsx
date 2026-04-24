import React from "react";
import Test from "../components/Test";

import BannerTintuc from "../components/BannerTinTuc";
import ShowTinTucNoiBat from "../components/ShowTinTucNoiBat";
import ShowKienThucMoi from "../components/ShowKienThucMoi";
import Sidebar from "../components/Sidebar";

export default function Tintuc() {
  return (
    <>
    <Test/>
    <div className="container mt-5">
      <div className="row g-5">
        {/* Banner thường nằm trên cùng, nên để ngoài hàng row hoặc trong col-12 */}
        <div className="col-12 mb-4">
            <BannerTintuc />
        </div>
        
        <div className="col-md-8">
          <ShowTinTucNoiBat />
          <ShowKienThucMoi />
        </div>
        
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </div>
    </>
  );
}