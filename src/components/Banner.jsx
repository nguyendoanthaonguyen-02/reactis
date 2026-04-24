export default function Banner() {
    return (
        <>
            <div className="row">
                <div className="col-md-3 frame-danhmuc bg1">
                    <h3>DANH MỤC</h3>
                    <ul>
                        <li>
                            <i className="fa-solid fa-fan" />
                            Kẹp Tóc
                            <ul>
                                <li>Kẹp đôi</li>
                                <li>Kẹp đơn</li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i className="fa-solid fa-clover" />
                            Bó Hoa
                            <ul>
                                <li>Hoa phối loại</li>
                                <li>Hoa đơn loại</li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i className="fa-brands fa-envira" />
                            Kẽm Nhung
                            <ul>
                                <li>Kẽm thường</li>
                                <li>Kẽm pastel</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9  frame-danhmuc">
                    <div className="row">
                        <div className="carousel slide" data-bs-ride="carousel" id="demo">
                            <div className="carousel-indicators">
                                <button
                                    className="active"
                                    data-bs-slide-to="0"
                                    data-bs-target="#demo"
                                    type="button"
                                />
                                <button data-bs-slide-to="1" data-bs-target="#demo" type="button" />
                                <button data-bs-slide-to="2" data-bs-target="#demo" type="button" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        alt="Los Angeles"
                                        className="d-block w-100"
                                        src="./img/slider5.jpg"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        alt="Chicago"
                                        className="d-block w-100"
                                        src="./img/slider6.jpg"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        alt="New York"
                                        className="d-block w-100"
                                        src="./img/slider1a.jpg"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                data-bs-slide="prev"
                                data-bs-target="#demo"
                                type="button">
                                <span className="carousel-control-prev-icon" />
                            </button>
                            <button
                                className="carousel-control-next"
                                data-bs-slide="next"
                                data-bs-target="#demo"
                                type="button">
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}