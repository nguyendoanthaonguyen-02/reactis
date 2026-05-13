import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ConnectAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        setProducts(res.data || []);
        /*  res.data → danh sách sản phẩm từ API
            || [] → nếu không có dữ liệu, dùng mảng rỗng*/
      })
      .catch((err) => {
        console.error("Lỗi:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center w-100">Đang tải...</p>;
  if (error) return <p className="text-center w-100 text-danger">Lỗi khi tải dữ liệu.</p>;

  return (
    <div className="container">
      <h1 className="text-center my-4">
        Danh Sách Sản Phẩm
      </h1>
      <div className="row g-3">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="col-md-4" key={item.id}>
          <div className="card">
            <img className="card-img-top" src={`/img/${item.hinh}`} alt={item.tensp} />
            <div className="card-body">
              <h4 className="card-title">{item.tensp}</h4>
              <p className="card-text">{item.gia}đ</p>
              <Link to={`/detail/${item.id}`} className="btn btn-primary btn-sm px-4"> Xem chi tiết</Link>
            </div>
          </div>
        </div>
          ))
        ) : (
          <p className="text-center w-100">Không tìm thấy sản phẩm nào!</p>
        )}
      </div>
    </div>
  );
}
