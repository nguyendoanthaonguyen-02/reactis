import { useState } from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";


export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div>
        <div className="row frame-heaer">
          <div className="row">
            <div className="col-md-4  cch text-center">LIÊN HỆ: 090123456789</div>
            <div className="col-md-4 cch text-center">HOTLINE: 0123456789</div>
            <div className="col-md-4 cch text-center">
              <button className="btn btn-danger" id="btn-login" type="button" onClick={() => setShowLogin(true)}>
                
                Đăng Nhâp
              </button>
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
                      <a className="nav-link text-black" href="javascript:void(0)">
                        Liên Hệ
                      </a>
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
