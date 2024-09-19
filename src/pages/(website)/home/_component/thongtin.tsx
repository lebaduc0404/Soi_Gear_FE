import Test from "@/pages/test/test";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="container6">
        <Test/>
        <div className="container mx-auto p-8">
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text text-4xl font-bold mb-8 text-indigo-600">
              Về Chúng Tôi
            </h1>
            <hr className="hr" />
            <div className="ab flex items-start space-x-6">
              <div className="img">
                <img
                  src="../../../../../src/components/icons/logo.webp"
                  alt="logo"
                />
              </div>
              <div className="space-y-6 w-[390px]">
                <section className="ml-[-50px] mt-[30px]">
                  <h2 className="text text-2xl font-semibold mb-4 text-gray-800">
                    Giới Thiệu
                  </h2>
                  <p className="text1 text-gray-700">
                    Sói Gear là nhà phân phối và bán lẻ hàng đầu về các thiết bị
                    chơi game, phụ kiện máy tính và các sản phẩm công nghệ khác.
                    Chúng tôi cam kết mang đến cho khách hàng những sản phẩm
                    chất lượng cao với giá cả cạnh tranh.
                  </p>
                </section>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              {/* <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Sứ Mệnh
                </h2>
                <p className="text-gray-700">
                  Sứ mệnh của chúng tôi là cung cấp các sản phẩm và dịch vụ tốt
                  nhất, đáp ứng nhu cầu của khách hàng và mang lại trải nghiệm
                  mua sắm tuyệt vời.
                </p>
              </section> */}

              <section className="ml-[-50px] mt-[60px]">
                <h2 className="text text-2xl font-semibold mb-4 text-gray-800 text-center">
                  Giá Trị Cốt Lõi
                </h2>
                <div className="carousel-wrapper flex justify-between items-center space-x-6">
                  <div className="carousel-item text-center">
                    <img
                      src="../../../../../src/components/icons/logo.webp"
                      alt="Chất lượng"
                      className="mx-auto"
                    />
                    <div className="text2 carousel-caption mt-2 text-lg">
                      Chất lượng
                    </div>
                    <p className="text1">
                      Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao.
                    </p>
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src="../../../../../src/components/icons/logo.webp"
                      alt="Uy tín"
                      className="mx-auto"
                    />
                    <div className="text2 carousel-caption mt-2 text-lg">
                      Uy tín
                    </div>
                    <p className="text1">
                      Luôn đặt chữ tín lên hàng đầu trong mọi hoạt động.
                    </p>
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src="../../../../../src/components/icons/logo.webp"
                      alt="Khách hàng"
                      className="mx-auto"
                    />
                    <div className="text2 carousel-caption mt-2 text-lg">
                      Khách hàng
                    </div>
                    <p className="text1">
                      Luôn lắng nghe và đáp ứng nhu cầu của khách hàng
                    </p>
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src="../../../../../src/components/icons/logo.webp"
                      alt="Đổi mới"
                      className="mx-auto"
                    />
                    <div className="text2 carousel-caption mt-2 text-lg">
                      Đổi mới
                    </div>
                    <p className="text1">
                      Không ngừng cải tiến và sáng tạo để phát triển.
                    </p>
                  </div>
                </div>
              </section>
              {/* <section>
                <h2 className="text text-2xl font-semibold mb-4 text-gray-800">
                  Liên Hệ
                </h2>
                <p className="text1 text-gray-700">
                  Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi
                  qua các kênh sau:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li className="text1">
                    Địa chỉ: Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội
                  </li>
                  <li className="text1">Điện thoại: 0383005327</li>
                  <li className="text1">Email: leduc090404@gmail.com</li>
                </ul>
              </section> */}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .container6 {
          background-color: #ffffff;
          // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
          width: 1116px;
          margin-left: 200px;
          margin-top: 20px;
        }
        .img {
          width: 540px;
          height: 212px;
        }
          .ab{
            width: 1000px;
            margin-left: 40px;
            padding-top: 40px
          }
            .carousel-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1036px;
            overflow: hidden;
            gap: 50px;
            margin-left: 38px
          }

          .carousel-container {
            display: flex;
            gap: 45px;
            flex-direction: row;
            margin-left: 40px
          }

          .carousel-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 160px;
            height: 250px;
            position: relative;
            padding-left: 40px
            overflow: hidden;
          }

          .carousel-image {
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 50%;
            border: 1px solid #999999;
            animation: rotate 10s linear infinite;
          }

          .carousel-caption {
            margin-top: 15px;
            text-align: center;
            font-weight: 600; 
            font-size: 20px; 
            color: #333;
          }
            .text{
              font-size: 36px;
              color: black;
            }
              .text1{
                font-size: 16px
              }
                .text2{
                  font-size: 20px
                }
                  .hr {
                    width: 100%;
                    height: 1.5px;
                    border: none;
                    background-color: black;
                    margin: 20px 0px;
                  }

      `}</style>
    </>
  );
};

export default AboutPage;
