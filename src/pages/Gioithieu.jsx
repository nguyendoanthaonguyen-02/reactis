import Gioithieu from "../pages/Gioithieu";


export default function index() {

    return (
        <>
<html key="1">
  <head>
    <meta charSet="UTF-8" />
    <title>Giới Thiệu</title>
    <link href="css/style1.css" rel="stylesheet" />
    <link
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
  </head>
  <body>
    <form action="" id="login">
      <div className="close">X</div>
      <div className="row text-center">
        <h3>ĐĂNG NHẬP</h3>
      </div>
      <div className="fm my-3">
        <input className="w-100" id="user" placeholder="user" type="text" />
      </div>
      <div className="fm">
        <input
          className="w-100"
          id="password"
          placeholder="password"
          type="password"
        />
      </div>
      <div className="w-100 text-center mt-2">
        <div className="div">
          <button
            className="btn btn-success"
            style={{
              width: "150px",
            }}>
            Đăng Nhập
          </button>
        </div>
      </div>
    </form>
    <div className="header text-center">
      <h1>HOA KẼM NHUNG</h1>
      <p>Hoa handmade đẹp và ý nghĩa</p>
    </div>
    <div className="container1">
      <h2>Giới thiệu về shop</h2>
      <img className="main-img" src="./img/video1.gif" />
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <h1>HOA KẼM NHUNG ĐẸP</h1>
          <p>
            Chào mừng bạn đến với <b>HOA KẼM NHUNG</b> 🎉
          </p>
          <div className="row">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder="0"
              height="400px"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/lFjIaUpC2Ik?si=mJwkTvV9ZxaFDgRV"
              title="YouTube video player"
              width="600px"
            />
          </div>
        </div>
      </div>
      <div id="chitiet">
        <p className="text">
          Hoa Kẽm Nhung là shop chuyên thiết kế và sản xuất các sản phẩm hoa
          handmade được làm hoàn toàn thủ công. Mỗi sản phẩm đều được chăm chút
          tỉ mỉ từ khâu chọn nguyên liệu đến hoàn thiện.
        </p>
        <p className="text">
          Chúng tôi mong muốn mang đến cho khách hàng những bó hoa không chỉ đẹp
          mà còn bền lâu theo thời gian. Hoa kẽm nhung có thể giữ được vẻ đẹp
          trong nhiều năm mà không bị héo như hoa tươi.
        </p>
        <p className="text">
          Với sự sáng tạo và đam mê, shop luôn cập nhật nhiều mẫu mã mới, phù
          hợp cho các dịp như sinh nhật, lễ tốt nghiệp, 8/3, 20/10 và nhiều sự
          kiện đặc biệt khác.
        </p>
      </div>
      <button className="btn btn-outline-dark d-block mx-auto" id="btn1">
        Chi tiết
      </button>
      <p className="text highlight-text justify-content-center text-center">
        Hoa Kẽm Nhung – Trao yêu thương qua từng cánh hoa 💖
      </p>
      <h3>Sản phẩm nổi bật</h3>
      <div className="product">
        <img src="./img/6.jpg" width="200" />
        <img src="./img/9.jpg" width="200" />
        <img src="./img/2.jpg" width="200" />
      </div>
      <h3>Giá trị của shop</h3>
      <ul className="list text-center">
        <li>Sản phẩm đẹp và bền</li>
        <li>Thiết kế sáng tạo</li>
        <li>Phục vụ tận tình</li>
      </ul>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger">Liên hệ đặt hàng</button>
      </div>
    </div>
    <div className="customer-review">
      <h2>💬 Khách Hàng Nói Gì Về Chúng Tôi?</h2>
      <div className="review-container">
        <div className="review-card">
          <p className="review-text">“Sản phẩm đẹp, phù hợp đem tặng quà.”</p>
          <div className="review-info">
            <img alt="" src="./img/avt2.jpg" />
            <div>
              <h4>Lê Tuấn Anh</h4>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p className="review-text">
            “Đóng gói đẹp, giao hàng nhanh. Sẽ ủng hộ dài lâu!”
          </p>
          <div className="review-info">
            <img alt="" src="./img/avt3.jpg" />
            <div>
              <h4>Võ Công Lý</h4>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <p className="review-text">“Màu sắc đẹp mắt, mẫu mã đa dạng.”</p>
          <div className="review-info">
            <img alt="" src="./img/avt1.jpg" />
            <div>
              <h4>Nguyễn Yến My</h4>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html:
          '        $(document).ready(function () {            $("#login").hide();            $("#btn-login").click(function () {                $("#login").toggle();                $(".close").click(function () {                    $("#login").hide();                })            })        })        $(document).ready(function () {            $("#submit").click(function () {                event.preventDefault();                let user = $("#user").val();                let password = $("#password").val();                console.log(user);                console.log(password);                if(user==""|| password=="") {                    alert("chưa nhập user và password")                } else{                    if(user=="admin"&& password=="1234"){                        alert("đăng nhập thành công")                    }                }            })        })    ',
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html:
          '        $(document).ready(function () {            $("#btn1").click(function () {                $("#chitiet").slideToggle();            });        })    ',
      }}
    />
  </body>
</html>
  </>
    )
}