const Blog = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 5s infinite",
  };

  const keyframes = `
      @keyframes rainbowText {
        0% { color: red; }
        14% { color: orange; }
        28% { color: yellow; }
        42% { color: green; }
        57% { color: blue; }
        71% { color: indigo; }
        85% { color: violet; }
        100% { color: red; }
      }
    `;

  return (
    <>
      <style>{keyframes}</style>
      <section className="blog">
        <div className="container">
          <div className="section-heading section-blog-heading">
            <h2 className="section-heading__title" style={rainbowTextStyle}>
              Kiến Thức & Phần Mềm
            </h2>
          </div>
          <div className="section-body">
            <div className="post-list">
              <div className="post-item">
                <div className="post-image">
                  <a href="">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/large/100/438/322/articles/image-20240326105315.jpg?v=1721031601520"
                      alt=""
                      className="post__thumbnail"
                      style={{
                        width: "600px",
                        borderRadius: "10px",
                        height: "220px",
                      }}
                    />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="" className="post__link">
                      Hướng dẫn sử dụng Chilkey ND75
                    </a>
                  </h3>
                  <p className="post__excerpt">
                    Điều chỉnh kết nối & hiệu ứng LED Kết nối bàn phím (Hỗ trợ
                    tối đa 3 thiết bị Bluetooth và 1 thiết bị kết nối 2.4 GHz) +
                    Kết nối Bluetooth: Nhấn giữ tổ hợp FN + Q/W/E 3s để ghép kết
                    nối Bluetooth. Khi đó, các đèn của phím Q/W/E sẽ nháy nhanh
                    để vào chế độ ghép nối. Sau khi ghép Bluetooth thành công,
                    đèn sẽ trở lại bình thường. Nhấn nhanh tổ hợp FN + Q/W/E để
                    đổi từng kênh kết nối, khi này thì LED trên từng nút sẽ nháy
                    chậm để vào chế độ kết nối lại.
                  </p>
                  <a
                    href="https://soigear.vn/huong-dan-su-dung-chilkey-nd75"
                    className="post__readmore"
                  >
                    Chi tiết
                    <img src="/src/assets/icons/icon-arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
              <div className="post-item">
                <div className="post-image">
                  <a href="">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/510/products/be2228c2-d837-4650-9f16-7172d03af70f-1711789449802.jpg?v=1711794186290"
                      alt=""
                      className="post__thumbnail"
                      style={{
                        width: "600px",
                        borderRadius: "10px",
                        height: "220px",
                      }}
                    />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="" className="post__link">
                      Hướng Dẫn Sử Dụng Monka A75
                    </a>
                  </h3>
                  <p className="post__excerpt">
                    Kết nối 2.4G : - Gạt công tắt sang trái - Nhấn giữ FN + R
                    cho đến khi đèn nhấp nháy nhanh , sau đó cắm đầu USB vào
                    thiết bị cần kết nối Kết nối Wired - Gạt công tắt về giữa và
                    cắm dây Kết nối BLT - Gạt công tắt sang phải , sau đó nhấn
                    giữ FN + Q/W/E cho đến khi đèn nhấp nháy nhanh , sau đó vào
                    thiết bị cần kết nối tìm tên thiết bị cần kết nối Chức năng
                    của Knob - Xoay trái phải để điều chỉnh âm lượng , nhấn
                    nhanh để chuyển đổi đèn bàn phím
                  </p>
                  <a
                    href="https://soigear.vn/huong-dan-su-dung-monka-a75"
                    className="post__readmore"
                  >
                    Chi tiết
                    <img src="/src/assets/icons/icon-arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
              <div className="post-item">
                <div className="post-image">
                  <a href="">
                    <img
                      src="https://bizweb.dktcdn.net/thumb/large/100/438/322/articles/image-20240326105315.jpg?v=1721031601520"
                      alt=""
                      className="post__thumbnail"
                      style={{
                        width: "600px",
                        borderRadius: "10px",
                        height: "220px",
                      }}
                    />
                  </a>
                </div>
                <div className="post-info">
                  <h3 className="post__title">
                    <a href="" className="post__link">
                      Hướng dẫn sử dụng FL-Esports OG87
                    </a>
                  </h3>
                  <p className="post__excerpt">
                    Hướng dẫn sử dụng FL-Esports OG87 Phương thức kết nối Wired
                    mode: Gạt công tắt về chính giữa Phương thức kết nối 2.4G :
                    - FN+ 4 : Nhấn phím kết hợp FN trong 3 giây để vào chế độ
                    máy thu ghép nối 2.4G Phương thức kết nối BLT : - FN + 1 :
                    Nhấn để chuyển sang thiết bị BT 1 và nhấn 3S để vào ghép nối
                    - FN + 2 : Nhấn để chuyển sang thiết bị BT 2 và nhấn 3S để
                    vào ghép nối - FN +3 : Nhấn để chuyển sang thiết bị BT 3 và
                    nhấn 3S để vào ghép nối
                  </p>
                  <a
                    href="https://soigear.vn/huong-dan-su-dung-fl-esports-og87"
                    className="post__readmore"
                  >
                    Chi Tiết
                    <img src="/src/assets/icons/icon-arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
              {/*End .post-item*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
