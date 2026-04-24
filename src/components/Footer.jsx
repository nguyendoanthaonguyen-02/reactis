export default function Footer() {
  return (
    <>
    <footer>
  <div className="row">
    <div className="col-md-4">
      <h3>Shop Kẽm Nhung</h3>
      <p>Công ty trách nhiệm hữu hiệu.</p>
      <p>© 2026 Website Bán Hàng</p>
    </div>
    <div className="col-md-4">
      <h3>Các địa chỉ chi nhánh</h3>
      <p>Địa chỉ chi nhánh 1: Đường AD, Phường BCC, Thành phố.HCM</p>
      <p>Địa chỉ chi nhánh 2: Đường EFV, Phường MNT, Thành phố.HCM</p>
    </div>
    <div className="col-md-4">
      <iframe
        allowFullScreen
        height="150"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!3m2!1sen!2s!4v1773043099698!5m2!1sen!2s!6m8!1m7!1sLquIWzqGMQkVHdbtW45chA!2m2!1d10.75559451282622!2d106.6642531418932!3f152.82611!4f0!5f0.7820865974627469"
        style={{
          border: "0",
        }}
        width="50%"
      />
    </div>
  </div>
</footer>
    </>
  );
}
