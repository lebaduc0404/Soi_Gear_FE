const Blog = () => {
  const rainbowTextStyle = {
    animation: "rainbowText 5s infinite",
  };

  const keyframes = `
      color: black;
    `;

  return (
    <>
      <style>{keyframes}</style>
      <section className="blog">
        <div className="container-2">
          <div className="container">
            <div className="section-heading section-blog-heading">
              <h2 className="section-heading__title" style={rainbowTextStyle}>
                KIẾN THỨC & PHẦN MỀM
              </h2>
            </div>
            <div className="section-body">
              <div className="section-body1">
                <div className="post-list">
                  <div className="container1">
                    <div className="left">
                      <div className="post-item">
                        <div className="post-image">
                          <a href="">
                            <img
                              src="https://bizweb.dktcdn.net/thumb/large/100/438/322/articles/image-20240326105315.jpg?v=1721031601520"
                              alt=""
                              className="post__thumbnail"
                              style={{
                                width: "581px",
                                borderRadius: "10px",
                                height: "274px",
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
                            Điều chỉnh kết nối & hiệu ứng LED Kết nối bàn phím
                            (Hỗ trợ tối đa 3 thiết bị Bluetooth và 1 thiết bị
                            kết nối 2.4 GHz) + Kết nối Bluetooth: Nhấn giữ tổ
                            hợp FN + Q/W/E 3s để ghép kết nối ...
                          </p>
                          <a
                            href="https://soigear.vn/huong-dan-su-dung-chilkey-nd75"
                            className="post__readmore"
                          >
                            Chi tiết
                            {/* <img src="/src/assets/icons/icon-arrow-right.svg" alt="" /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*End .post-item*/}
                    <div className="right">
                      <div className="right1">
                        <div className="post-item">
                          <div className="">
                            <a href="">
                              <img
                                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/510/products/be2228c2-d837-4650-9f16-7172d03af70f-1711789449802.jpg?v=1711794186290"
                                alt=""
                                className=""
                                style={{
                                  width: "130px",
                                  borderRadius: "10px",
                                  height: "130px",
                                }}
                              />
                            </a>
                          </div>
                          <div className="post-1">
                            <h3 className="post__title">
                              <a href="" className="">
                                Hướng dẫn sử dụng FL-Esports OG89
                              </a>
                            </h3>
                            <a
                              href="https://soigear.vn/huong-dan-su-dung-monka-a75"
                              className="post__readmore"
                            >
                              Chi tiết
                              {/* <img src="/src/assets/icons/icon-arrow-right.svg" alt="" /> */}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*End .post-item*/}
                      <div className="right1">
                        <div className="post-item">
                          <div className="post-image">
                            <a href="">
                              <img
                                src="https://bizweb.dktcdn.net/thumb/large/100/438/322/articles/image-20240326105315.jpg?v=1721031601520"
                                alt=""
                                className="post__thumbnail"
                                style={{
                                  width: "130px",
                                  borderRadius: "10px",
                                  height: "130px",
                                }}
                              />
                            </a>
                          </div>
                          <div className="post-1">
                            <h3 className="post__title">
                              <a href="" className="">
                                Hướng dẫn sử dụng FL-Esports OG88
                              </a>
                            </h3>
                            <a
                              href="https://soigear.vn/huong-dan-su-dung-fl-esports-og87"
                              className="post__readmore"
                            >
                              Chi Tiết
                              {/* <img src="/src/assets/icons/icon-arrow-right.svg" alt="" /> */}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*End .post-item*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`

      .container-2{
        width: 1155px;
        height: 399px;
        background-color: #FFFFFF;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        margin-left: 180px;
        margin-top: 44px;
        border-radius: 10px;
      }
        .container1 {
          display: flex; /* Đặt flexbox cho container */
          justify-content: space-between; /* Giãn đều hai div */
          align-items: center; /* Căn giữa theo chiều dọc nếu cần */
        }
        .left {
          width: 630px;
          height: 274px;
          object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
        }
        .right {
          width: 393px;
          height: 274px;
          object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
        }
          .section-body1{
            height: 348px
          }
            .post-1{
              margin-left: -90px;
              margin-right: -20px
            }
              .right1{
                margin-left: -50px
              }
                .post__readmore{
                 margin-left: 200px
                }
      `}</style>
    </>
  );
};

export default Blog;
