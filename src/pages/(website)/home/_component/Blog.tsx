import { ShopImg2 } from "@/components/icons";

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
          <div className="">
            <div className="section-heading">
              <h2 className="section-heading__title" style={rainbowTextStyle}>
                KIẾN THỨC & PHẦN MỀM
              </h2>
            </div>

            <div className="section-body w-[72.65625vw] h-[52.574vh]">
              <div className="section-body1 w-[72.65625vw] h-[52.574vh]">
                <div className="post-list">
                  <div className="container1">
                    <div className="left">
                      <div className="post-item">
                        <div className="post-image">
                          <a href="">
                            <img
                              src={ShopImg2}
                              alt=""
                              className="post__thumbnail"
                              style={{
                                width: "17.838vw",
                                borderRadius: "10px",
                                height: "auto",
                              }}
                            />
                          </a>
                        </div>
                        <div className="">
                          <h3 className="post__title">
                            <a href="" className="post__link text-[2.439vh]">
                              Hướng dẫn sử dụng Chilkey ND75
                            </a>
                          </h3>
                          <p className="post__excerpt text-[2.0325vh]">
                            Điều chỉnh kết nối & hiệu ứng LED Kết nối bàn phím
                            (Hỗ trợ tối đa 3 thiết bị Bluetooth và 1 thiết bị
                            kết nối 2.4 GHz) + Kết nối Bluetooth: Nhấn giữ tổ
                            hợp FN + Q/W/E 3s để ghép kết nối ...
                          </p>
                          <a
                            href="https://soigear.vn/huong-dan-su-dung-chilkey-nd75"
                            className="post__readmore text-[2.439vh]"
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
                                src={ShopImg2}
                                alt=""
                                className=""
                                style={{
                                  width: "8.463vw",
                                  borderRadius: "10px",
                                  height: "auto",
                                }}
                              />
                            </a>
                          </div>
                          <div className="post-1">
                            <h3 className="post__title">
                              <a href="" className="text-[2.439vh]">
                                Hướng dẫn sử dụng FL-Esports OG89
                              </a>
                            </h3>
                            <a
                              href="https://soigear.vn/huong-dan-su-dung-monka-a75"
                              className="post__readmore text-[2.439vh]"
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
                                src={ShopImg2}
                                alt=""
                                className="post__thumbnail"
                                style={{
                                  width: "8.463vw",
                                  borderRadius: "10px",
                                  height: "auto",
                                }}
                              />
                            </a>
                          </div>
                          <div className="post-1">
                            <h3 className="post__title">
                              <a href="" className="text-[2.439vh]">
                                Hướng dẫn sử dụng FL-Esports OG88
                              </a>
                            </h3>
                            <a
                              href="https://soigear.vn/huong-dan-su-dung-fl-esports-og87"
                              className="post__readmore text-[2.439vh]"
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
        width: 72.65625vw;
        height: 52.57vh;
        background-color: #FFFFFF;
        // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        margin-left: 13.286vw;
        margin-top: -0.962vh;
        border-radius: 10px;
      }
        .container1 {
          display: flex; /* Đặt flexbox cho container */
          justify-content: space-between; /* Giãn đều hai div */
          align-items: center; /* Căn giữa theo chiều dọc nếu cần */
          margin-top: -5.42vh;
          margin-left: 2.6vw;
        }
          .post-list{
            margin-top: 9.42vh;
            width: 67.578vw;
            height: 37.127vh;
          }
        .left {
          width: 37.825vw;
          height: 37.127vh;
          object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
        }
        .right {
          width: 26.888vw;
          height: 37.127vh;
          margin-left: 10.84vh;
          object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
        }
            .post-1{
              margin-left: -2.90625vw;
              margin-right:  -1.65vw;
            }
              // .right1{
              //   margin-left: px
              // }
                .post__readmore{
                 margin-left: 8.765625vw;
                }
      `}</style>
    </>
  );
};

export default Blog;
