import Test from "@/pages/test/test";
import React from "react";
import {
  FaBox,
  FaShippingFast,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WarrantyPolicy: React.FC = () => {
  return (
    <>
      <section className="test bg-while p-8  rounded-lg ml-36 mt-5 mb-5">
        <Test />
        <div className="main">
          <h1 className="text text-4xl font-bold mb-8 mt-[40px]">
            CHÍNH SÁCH BẢO HÀNH
          </h1>
          <hr className="hr" />
          <div className="space-y-6">
            <h3 className="text-[24px] text-2xl font-semibold">
              QUY TRÌNH GỬI BẢO HÀNH CÁC SẢN PHẨM MUA BỞI SÓI GEAR
            </h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="flex items-start space-x-2">
                <FaBox className="text-indigo-500 w-5 h-5 mt-1" />
                <span>
                  Quý khách vui lòng đóng gói kỹ sản phẩm để đảm bảo an toàn khi
                  vận chuyển hàng.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FaShippingFast className="text-indigo-500 w-5 h-5 mt-1" />
                <span>
                  Bên ngoài kiện hàng vui lòng ghi Tên, SĐT và Địa chỉ của quý
                  khách để shop tiện liên lạc và gửi hàng lại.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-indigo-500 w-5 h-5 mt-1" />
                <span>
                  Gửi sản phẩm về Sói Gear theo thông tin sau (quý khách tự
                  thanh toán chi phí vận chuyển chiều gửi đi):
                  <br />
                  <strong>Người nhận:</strong>{" "}
                  <strong className="text-red-500">Lê Bá Đức</strong>
                  <br />
                  <strong>SĐT:</strong> 038300537
                  <br />
                  <strong>Địa chỉ:</strong> Số 1 Đường Trịnh Văn Bô, Nam Từ
                  Liêm, Hà Nội
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FaShippingFast className="text-indigo-500 w-5 h-5 mt-1" />
                <span>
                  Sau khi bảo hành xong, Sói Gear sẽ liên hệ gửi lại sản phẩm về
                  địa chỉ mà quý khách cung cấp. (Chi phí vận chuyển chiều gửi
                  lại do Sói Gear thanh toán)
                </span>
              </li>
            </ol>

            <h3 className="text-2xl font-semibold mt-8 text-[24px]">
              A. Địa điểm bảo hành:
            </h3>
            <ul className="list-disc list-inside space-y-4">
              <li>
                Toàn bộ sản phẩm được phân phối và bán lẻ bởi Sói Gear đều được
                bảo hành tại địa chỉ của Sói Gear.
              </li>
              <li>
                Đối với những đơn hàng mua hàng từ xa, quý khách vui lòng gọi
                điện, nhắn tin qua Fanpage, Shopee, Lazada, Zalo để được Sói
                Gear hỗ trợ.
              </li>
              <li>
                Với các trường hợp bảo hành từ xa, quy trình bảo hành thực hiện
                như sau:
                <ol className="list-decimal list-inside space-y-2 ml-5 mt-2">
                  <li>
                    Quý khách vui lòng đóng gói kỹ sản phẩm để đảm bảo an toàn
                    khi vận chuyển hàng. Sói Gear sẽ không chịu trách nhiệm khi
                    có các lỗi phát sinh do quá trình vận chuyển.
                  </li>
                  <li>
                    Bên ngoài kiện hàng vui lòng ghi Tên, SĐT và Địa chỉ của quý
                    khách để shop tiện liên lạc và gửi hàng lại.
                  </li>
                </ol>
              </li>
              <li>
                Gửi sản phẩm về địa chỉ của Sói Gear. Chi phí chuyển phát chiều
                gửi đi quý khách vui lòng tự thanh toán.
              </li>
              <li>
                Sau khi bảo hành xong, Sói Gear sẽ liên hệ gửi lại sản phẩm về
                địa chỉ mà quý khách cung cấp. Chi phí vận chuyển chiều gửi lại
                do Sói Gear thanh toán.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 text-[24px]">
              B. Những trường hợp sau không được bảo hành:
            </h3>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Các sản phẩm không còn nguyên tem niêm phong, tem bảo hành, có
                hiện tượng bị tháo rời để tự ý can thiệp vào kết cấu bên trong
                của sản phẩm.
              </li>
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Sử dụng nguồn sạc điện trực tiếp đối với các thiết bị không dây,
                dẫn tới hỏng hóc linh kiện và chức năng sử dụng pin của bàn
                phím.
              </li>
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Hư hỏng do tác động vật lý của người tiêu dùng như rơi vỡ, va
                chạm, vào nước, ẩm thấp, chập cháy.
              </li>
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Hư hỏng do thiên tai, động vật, côn trùng và do con người gây
                ra.
              </li>
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Hiện tượng rỉ sét do yếu tố thời tiết, độ ẩm, thói quen người
                dùng đều không được bảo hành.
              </li>
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Hết thời hạn bảo hành ghi trên tem.
              </li>
              <li>
                <p className="inline text-red-500 w-5 h-5 mr-2" />
                Khách hàng tự ý can thiệp vào firmware của sản phẩm.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 text-[24px]">
              C. Các trường hợp khác sẽ được bảo hành theo tiêu chuẩn của nhà
              sản xuất:
            </h3>
            <ul className="list-disc list-inside space-y-4">
              <li>
                Cụ thể với bàn phím cơ sẽ được bảo hành các lỗi phát sinh do nhà
                sản xuất mà không phải do người dùng: Hỏng mạch, chết led, lỗi
                kết nối.
              </li>
              <li>
                Các sản phẩm không sử dụng điện như Keycap, Switch, Keypuller,
                Switch Puller, Lube Station... đều không bảo hành.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <style>{`
      .main{
        margin-left:30px;
      }
      .test{
        background-color: #ffffff;
    width: 80%; /* Sử dụng đơn vị % để tự động điều chỉnh kích thước */
    height: auto;
    max-width: 1116px; /* Đặt kích thước tối đa */
    margin: 20px auto; /* Canh giữa phần tử và tạo khoảng cách trên/dưới */
    padding: 20px; /* Thêm padding để nội dung không sát biên */
}

@media screen and (max-width: 768px) {
    .test {
        width: 90%; /* Khi màn hình nhỏ, tăng chiều rộng lên 90% */
        margin-left: 10px; /* Điều chỉnh margin cho thiết bị nhỏ */
    }
}

@media screen and (max-width: 480px) {
    .test {
        width: 100%; /* Chiều rộng 100% cho màn hình nhỏ hơn */
        margin-left: 0; /* Margin bằng 0 để tiết kiệm không gian */
    }
}
        .hr {
          width: 100%;
          height: 1.5px;
          border: none;
          background-color: black;
          margin-bottom: 30px;
          margin-top: -5px;
        }
      `}</style>
    </>
  );
};

export default WarrantyPolicy;
