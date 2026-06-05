import React, { useState } from "react";

export default function Lienhe() {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        phone: "",
        content: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!form.fullname.trim()) {
            newErrors.fullname = "Họ tên không được để trống.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Số điện thoại không được để trống.";
        } else if (!/^0[0-9]{9}$/.test(form.phone.trim())) {
            newErrors.phone = "Số điện thoại phải bắt đầu bằng 0 và có 10 số.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email không được để trống.";
        } else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) {
            newErrors.email = "Email không hợp lệ.";
        }

        if (!form.content.trim()) {
            newErrors.content = "Nội dung không được để trống.";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = validate();
        setErrors(validation);

        if (Object.keys(validation).length === 0) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <div className="container py-5">
            {/* HEADER */}
            <div className="text-center mb-5">
                <h2 className="fw-bold text-info">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                <p className="text-secondary">
                    Hãy để lại lời nhắn, chúng tôi sẽ phản hồi bạn sớm nhất có thể!
                </p>
            </div>

            <div className="row g-5">
                {/* LEFT INFO */}
                <div className="col-md-6">
                    <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                        <h4 className="mb-4 fw-bold">Thông tin liên lạc</h4>

                        <p>📍 TPHCM, Việt Nam</p>
                        <p>📞 0912345678</p>
                        <p>✉️ kemnhung@gmail.com</p>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="col-md-6">
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 border rounded-4 shadow-sm bg-white h-100"
                    >
                        <h4 className="mb-4 fw-bold">Nhắn tin cho shop</h4>

                        <input
                            name="fullname"
                            value={form.fullname}
                            onChange={handleChange}
                            className="form-control mb-1"
                            placeholder="Họ và tên"
                        />
                        {errors.fullname && (
                            <small className="text-danger">{errors.fullname}</small>
                        )}

                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="form-control mt-3 mb-1"
                            placeholder="Số điện thoại"
                        />
                        {errors.phone && (
                            <small className="text-danger">{errors.phone}</small>
                        )}

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="form-control mt-3 mb-1"
                            placeholder="Email"
                        />
                        {errors.email && (
                            <small className="text-danger">{errors.email}</small>
                        )}

                        <textarea
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            className="form-control mt-3 mb-1"
                            rows="4"
                            placeholder="Nội dung"
                        />
                        {errors.content && (
                            <small className="text-danger">{errors.content}</small>
                        )}

                        <button
                            type="submit"
                            className="btn btn-info w-100 text-white fw-bold mt-3"
                        >
                            GỬI TIN NHẮN
                        </button>

                        {/* HIỂN THỊ NỘI DUNG SAU KHI GỬI */}
                        {submitted && (
                            <div
                                className="mt-4 p-4 rounded-4"
                                style={{
                                    background: "#e6ffed",
                                    border: "1px solid #8fd19e",
                                }}
                            >
                                <h5 className="fw-bold text-success">
                                    Gửi liên hệ thành công!
                                </h5>

                                <p>
                                    <strong>Họ tên:</strong> {form.fullname}
                                </p>
                                <p>
                                    <strong>Số điện thoại:</strong> {form.phone}
                                </p>
                                <p>
                                    <strong>Email:</strong> {form.email}
                                </p>
                                <p>
                                    <strong>Nội dung:</strong> {form.content}
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}