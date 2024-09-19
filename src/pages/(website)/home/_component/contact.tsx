import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Test from "@/pages/test/test";
// import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Họ và tên là bắt buộc"),
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  phone: yup.string().required("Số điện thoại là bắt buộc"),
  message: yup.string().required("Lời nhắn là bắt buộc"),
});

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactPage: React.FC = () => {
  // const navigate = useNavigate(); // Khai báo useNavigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = new URLSearchParams();
    formData.append("entry.323050142", data.name); // Thay bằng ID trường tên trong Google Form
    formData.append("entry.1296660199", data.email); // Thay bằng ID trường email trong Google Form
    formData.append("entry.1344814193", data.phone); // Thay bằng ID trường số điện thoại trong Google Form
    formData.append("entry.162458856", data.message); // Thay bằng ID trường lời nhắn trong Google Form

    // fetch(
    //   "https://docs.google.com/forms/d/e/1FAIpQLSfHhg7NKSJvLnyiLjprM2uAEMtgDrZOGan0oTpm8bHGHNGYTw/formResponse", // URL chính xác để gửi dữ liệu
    //   {
    //     method: "POST",
    //     body: formData,
    //     mode: "no-cors",
    //   }
    // )
    //   .then(() => {
    //     alert("Gửi thành công, chúng tôi sẽ liên hệ với bạn sớm nhất");
    //     navigate("/"); // Điều hướng về trang home sau khi gửi thành công
    //   })
    //   .catch((error) => {
    //     console.error("Lỗi gửi dữ liệu:", error);
    //   });
  };

  return (
    <>
      <div className="container-5">
        <Test />
        <div className="container mx-auto p-8 shadow-md mt-5 mb-5">
          <h1 className="text-4xl font-bold mb-8 text-indigo-600">Liên Hệ</h1>

          {/* Google Map */}
          <div className="w-full mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7447.727851395522!2d105.747262!3d21.03813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e940879933%3A0xcf10b34e9f1a03df!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1sen!2sus!4v1722291695252!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Contact Form */}
            <div className="bg-[black] w-[504px] h-[482px] lg:w-1/2 rounded-[10px]">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-white text-[24px] w-[318px] text-center ml-[108px] mt-[44px] mb-[57px]">
                  <h1>Liên hệ với chúng tôi ngay để nhận được tư vấn</h1>
                </div>
                <div className="ml-[47px]">
                  <input
                    type="text"
                    className={`mt-1 block w-full px-4 py-2 border w-[444px] h-[55px] ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } bg-[black] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="Nhập họ và tên"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex space-x-[-41px] ml-[47px]">
                  <div className="flex-1">
                    <input
                      type="email"
                      className={`block w-[211px] px-4 py-2 border h-[55px] ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } bg-[black] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="Nhập email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      type="tel"
                      className={`block w-[211px] px-4 py-2 border h-[55px] ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } bg-[black] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="Nhập số điện thoại"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="ml-[47px]">
                  <textarea
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } w-[444px] h-[55px] bg-[black] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder="Nhập lời nhắn"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="ml-[47px] ">
                  <button className="flex items-center justify-center w-[444px] h-[55px] bg-white hover:bg-blue-200 text-black font-semibold rounded-md shadow-sm">
                    Gửi lời nhắn
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 space-y-6">
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-indigo-500 w-6 h-6" />
                <div>
                  <h2 className="text-xl font-semibold">Địa chỉ</h2>
                  <p>Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <FaPhoneAlt className="text-indigo-500 w-6 h-6" />
                <div>
                  <h2 className="text-xl font-semibold">Số điện thoại</h2>
                  <p>0383005327</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <FaEnvelope className="text-indigo-500 w-6 h-6" />
                <div>
                  <h2 className="text-xl font-semibold">Email</h2>
                  <p>leduc090404@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div>
                  <h2 className="text-xl font-semibold">Hỗ Trợ</h2>
                  <p className="text-red-500 font-semibold mt-2">
                    Để được hỗ trợ và trả lời nhanh nhất, quý khách vui lòng
                    nhập đầy đủ thông tin vào Form sau để nhân viên hỗ trợ tốt
                    nhất. Thân ái.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .container-5{
        background-color:#FFFFFF;
        width: 1116px;
        margin-left: 196px;
      }
        .form{
        background-color: #111827;
          width: 506px;
          height: 460px;
          padding-top: 44px;
          // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        }
          .form{
            border-radius: 10px;
          }
          .text{
            color: white;
            font-size: 24px;
            width: 319px;
            height: 60px
            padding-top: 44px;
            margin-left: 93.2px;
          }
            .tel{
              margin-left: -13px
            }
              .form-1{
                margin-left: 30px;
              }
                .button{
                 background-color: white;
                 color:black;
                 text-align: center;
                }
      `}</style>
    </>
  );
};

export default ContactPage;
