import { useState } from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";


export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div>
        <div className="header-top-bar">
          <div className="container d-flex justify-content-between align-items-center py-1">
            {/* Bên trái: Thông tin Shop */}
            <div className="header-links-left d-flex align-items-center">
              <span className="me-3">Shop Kẽm Nhung MyLove: Gửi Tặng Yêu Thương</span>
              <div className="vr mx-2"></div>
              <span className="me-3">Hotline: 0123456789</span>
              <div className="vr mx-2"></div>
              <span>Kết nối
                <i className="bi bi-facebook mx-1"></i>
                <i className="bi bi-instagram"></i>
              </span>
            </div>

            {/* Bên phải: Tiện ích & Đăng nhập */}
            <div className="header-links-right d-flex align-items-center">
              <div className="header-item mx-2"><i className="bi bi-bell"></i> Thông báo</div>
              <div className="header-item mx-2"><i className="bi bi-question-circle"></i> Hỗ trợ</div>
              <div className="header-item mx-2 dropdown">
                <i className="bi bi-globe"></i> Tiếng Việt <i className="bi bi-chevron-down"></i>
              </div>
              <div className="auth-buttons ms-3">
                <span className="auth-link">Đăng Ký</span>
                <div className="vr mx-2"></div>
                <span className="auth-link fw-bold" onClick={() => setShowLogin(true)}>Đăng Nhập</span>
              </div>
              <div className="vr mx-2"></div>

              <Link to="/khach-hang" className="nav-link">Khách Hàng</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-sm navbar-dark bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" href="javascript:void(0)">
                  <img src="./img/logo.jpg" width="50px" />
                </a>
                <button
                  className="navbar-toggler"
                  data-bs-target="#mynavbar"
                  data-bs-toggle="collapse"
                  type="button">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link className="nav-link text-black" to="/Index">Trang Chủ</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-black" to="/gioithieu">Giới thiệu</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-black" to="/sanpham">Sản phẩm</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-black" to="/tintuc">Tin tức</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-black" to="/lienhe">Liên hệ</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-black" to="/giohang">Giỏ hàng</Link>
                    </li>

                  </ul>
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      placeholder="Tìm kiếm"
                      type="text"
                    />
                    <button className="btn btn-primary" type="button">
                      <i className="fa-solid fa-cart-shopping" />
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <LoginForm show={showLogin} onClose={() => setShowLogin(false)} />
      </div>
    </>


  );
}
