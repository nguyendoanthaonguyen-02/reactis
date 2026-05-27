import sanpham from "../data/products";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
export default function ShowSPKM() {
  const km = sanpham.filter(sp => sp.dm === "spkm");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm khuyến mãi</h2>
        {km.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`/img/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Link
                    to={`/detail/${sp.id}`}
                    className="btn btn-outline-primary btn-sm px-4 d-flex align-items-center justify-content-center"
                  >
                    Xem chi tiết
                  </Link>

                  <AddToCart product={sp}>
                    <span className="d-flex align-items-center justify-content-center">
                      Thêm vào giỏ hàng
                    </span>
                  </AddToCart>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowSPBC() {
  const bc = sanpham.filter(sp => sp.dm === "spbc");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm bán chạy</h2>
        {bc.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`/img/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Link
                    to={`/detail/${sp.id}`}
                    className="btn btn-outline-primary btn-sm px-4 d-flex align-items-center justify-content-center"
                  >
                    Xem chi tiết
                  </Link>

                  <AddToCart product={sp}>
                    <span className="d-flex align-items-center justify-content-center">
                      Thêm vào giỏ hàng
                    </span>
                  </AddToCart>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowSPH() {
  const hot = sanpham.filter(sp => sp.dm === "sph");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm Hot</h2>
        {hot.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./img/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Link
                    to={`/detail/${sp.id}`}
                    className="btn btn-outline-primary btn-sm px-4 d-flex align-items-center justify-content-center"
                  >
                    Xem chi tiết
                  </Link>

                  <AddToCart product={sp}>
                    <span className="d-flex align-items-center justify-content-center">
                      Thêm vào giỏ hàng
                    </span>
                  </AddToCart>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}