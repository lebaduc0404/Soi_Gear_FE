import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useCart from "@/common/hooks/useCart";
import { useNavigate } from "react-router-dom";
// import qrImage from "../../../assets/qr.jpg";
import axios from "axios";

const schema = yup.object().shape({
  firstname: yup.string().required("Họ là bắt buộc"),
  lastname: yup.string().required("Tên là bắt buộc"),
  city: yup.string().required("Thành phố là bắt buộc"),
  address: yup.string().required("Địa chỉ là bắt buộc"),
  phone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ"),
  email: yup.string().required("Email là bắt buộc").email("Email không hợp lệ"),
  paymentMethod: yup.string().required("Phương thức thanh toán là bắt buộc"),
});

const OrderPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
// const { clearCart } = useCart();
  const { isLoading, isError, clearCart } = useCart();
  const navigate = useNavigate();

 const FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLScB_y56a0i9BAg7jsRMO-uU8_MLsZeV8KwF-8rxNg8la9LmjA/formResponse`;

  const onSubmit = async (data: any) => {
    // const form = document.createElement("form");
    // form.action =
    //   "https://docs.google.com/forms/d/e/1FAIpQLScB_y56a0i9BAg7jsRMO-uU8_MLsZeV8KwF-8rxNg8la9LmjA/formResponse";
    // form.method = "POST";
    // form.target = "_self";

    // // Tạo input và thêm vào form
    // form.innerHTML = `
    //   <input type="hidden" name="entry.379756864" value="${data.firstname}">
    //   <input type="hidden" name="entry.613105581" value="${data.lastname}">
    //   <input type="hidden" name="entry.1496446561" value="${data.city}">
    //   <input type="hidden" name="entry.126886844" value="${data.address}">
    //   <input type="hidden" name="entry.1310817025" value="${data.phone}">
    //   <input type="hidden" name="entry.2014948123" value="${data.email}">
    //   <input type="hidden" name="entry.480433912" value="${data.paymentMethod}">
    // `;

    // // Submit form
    // document.body.appendChild(form);
    // form.submit();

    // // Xóa giỏ hàng và chuyển hướng sau khi gửi thành công
    //   await clearCart();
    //   navigate("/ordersucess");
     try {
       const formData = new URLSearchParams();
       formData.append("entry.379756864", data.firstname);
       formData.append("entry.613105581", data.lastname);
       formData.append("entry.1496446561", data.city);
       formData.append("entry.126886844", data.address);
       formData.append("entry.1310817025", data.phone);
       formData.append("entry.2014948123", data.email);
       formData.append("entry.480433912", data.paymentMethod);

       await axios.post(FORM_URL, formData);

       alert("");
     } catch (error) {
       alert("Cảm ơn bạn đã đặt hàng, chúng tôi sẽ sớm liên hệ lại bạn.");
       await clearCart();
     } finally {
       navigate("/ordersucess");
     }
  }

  if (isLoading)
    return <div className="container text-center">Đang tải...</div>;
  if (isError)
    return (
      <h2 className="container text-center">
        Bạn chưa thêm sản phẩm nào vào giỏ hàng!
      </h2>
    );

  return (
    <div className="p-6 max-w-7xl w-[736px] mt-[15px] mx-auto bg-white">
      <h2 className="text-[24px] font-bold mb-[5px] ml-[80px]">THANH TOÁN</h2>
      <hr className="w-[550px] mb-[32px] h-[1.2px] ml-[72px] bg-black rounded-t-[50px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-[72px] w-[545px] h-[124px]">
        <div className="flex items-center justify-between w-[450px] ml-[15px]">
          <div>
            <img
              className="w-[140px] h-[100px] rounded-[4px]"
              src="https://seve7.vn/wp-content/uploads/2023/06/3-7.jpg"
              alt="Product Image"
            />
          </div>

          <div className="ml-4 flex-1">
            <h2 className="font-semibold text-[18px]">
              Bàn phím cơ Rainbow Gear K205
            </h2>
            <div className="products__group flex">
              <span className="products__title text-[16px]">Phân loại</span>
              <span className="products__colons mx-1">:</span>
              <span className="products__description text-[16px]">
                Bàn phím cơ
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 right-0">
            <span className="products__description ml-[-100px] text-red-500 font-bold text-[16px]">
              800000 đ
            </span>
          </div>
        </div>
      </div>
      <hr className="w-[550px] ml-[72px] bg-black rounded-t-[50px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-[72px] w-[545px] h-[124px]">
        <div className="flex items-center justify-between w-[450px] ml-[15px]">
          <div>
            <img
              className="w-[140px] h-[100px] rounded-[4px]"
              src="https://seve7.vn/wp-content/uploads/2023/06/3-7.jpg"
              alt="Product Image"
            />
          </div>

          <div className="ml-4 flex-1">
            <h2 className="font-semibold text-[18px]">
              Bàn phím cơ Rainbow Gear K205
            </h2>
            <div className="products__group flex">
              <span className="products__title text-[16px]">Phân loại</span>
              <span className="products__colons mx-1">:</span>
              <span className="products__description text-[16px]">
                Bàn phím cơ
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 right-0">
            <span className="products__description ml-[-100px] text-red-500 font-bold text-[16px]">
              800000 đ
            </span>
          </div>
        </div>
      </div>
      <hr className="w-[550px] ml-[72px] bg-black rounded-t-[50px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[32px] ml-[72px] w-[545px] h-[45px]">
        <div className="flex items-center justify-between w-[450px] ml-[15px] text-[16px]">
          <b>Tổng tiền</b>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 right-0">
            <span className="products__description mb-[8px] ml-[-100px] text-red-500 font-bold text-[20px]">
              1600000 đ
            </span>
          </div>
        </div>
      </div>
      <hr className="w-[550px] ml-[72px] bg-black rounded-t-[50px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-[47px]">
        <div className="p-6 mt-[64px]">
          <b className="text-[20px]">Địa chỉ nhận hàng</b>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-[16px]"
          >
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-[16px] font-medium mb-1">
                  Họ và tên:
                </label>
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-[546px] h-[39px] p-2 border rounded-md ${
                        errors.firstname ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Mời bạn nhập tên"
                    />
                  )}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              {/* <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Họ:</label>
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`block w-full p-2 border rounded-md ${
                        errors.lastname ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Mời bạn nhập họ"
                    />
                  )}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div> */}
            </div>
            {/* <div>
              <label className="block text-sm font-medium mb-1">
                Thành Phố:
              </label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`block w-full p-2 border rounded-md ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Chọn thành phố</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Khác">Khác</option>
                  </select>
                )}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div> */}
            <div>
              <label className="block text-[16px] font-medium mb-1">
                Địa Chỉ:
              </label>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={`block w-[546px] h-[39px] p-2 border rounded-md ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mời bạn nhập địa chỉ"
                  />
                )}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[16px] font-medium mb-1">
                Số điện thoại:
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={`block w-[546px] h-[39px] p-2 border rounded-md ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mời bạn nhập số điện thoại"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            {/* <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className={`block w-full p-2 border rounded-md ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Mời bạn nhập email"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div> */}
            <div className="flex space-x-4 ml-[3px]">
              <fieldset className="w-[261px] mt-[32px]">
                <legend className="block text-[20px] font-medium mb-[12px] ml-[-2px]">
                  Phương thức thanh toán:
                </legend>
                <div className="flex flex-col space-y-2 ml-[-10px]">
                  <label className="flex items-center p-2 w-[261px] h-[39px]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="peer sr-only"
                    />
                    <span className="text-[16px] peer-checked:bg-[#254753] peer-checked:text-white p-2 rounded-lg w-[261px] h-[39px]">
                      Thanh toán COD
                    </span>
                  </label>
                  <label className="flex items-center p-2 w-[261px] h-[39px]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="peer sr-only"
                    />
                    <span className="text-[16px] peer-checked:bg-[#254753] peer-checked:text-white p-2 rounded-lg w-[261px] h-[39px]">
                      Chuyển khoản
                    </span>
                  </label>
                  <label className="flex items-center p-2 w-[261px] h-[39px]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="peer sr-only"
                    />
                    <span className="text-[16px] peer-checked:bg-[#254753] peer-checked:text-white p-2 rounded-lg w-[261px] h-[39px]">
                      Trả góp
                    </span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="w-[261px] mt-[32px]">
                <legend className="block text-[20px] font-medium mb-[12px] ml-[15px]">
                  Phương thức vận chuyển:
                </legend>
                <div className="flex flex-col space-y-2 ml-[10px]">
                  <label className="flex items-center p-2 w-[261px] h-[39px]">
                    <input
                      type="radio"
                      name="shippingMethod"
                      className="peer sr-only"
                    />
                    <span className="text-[16px] peer-checked:bg-[#254753] peer-checked:text-white p-2 rounded-lg w-[261px] h-[39px]">
                      Nhanh
                    </span>
                  </label>
                  <label className="flex items-center p-2 w-[261px] h-[39px]">
                    <input
                      type="radio"
                      name="shippingMethod"
                      className="peer sr-only"
                    />
                    <span className="text-[16px] peer-checked:bg-[#254753] peer-checked:text-white p-2 rounded-lg w-[261px] h-[39px]">
                      Thông thường
                    </span>
                  </label>
                  <label className="flex items-center p-2 w-[261px] h-[39px]">
                    <input
                      type="radio"
                      name="shippingMethod"
                      className="peer sr-only"
                    />
                    <span className="text-[16px] peer-checked:bg-[#254753] peer-checked:text-white p-2 rounded-lg w-[261px] h-[39px]">
                      Hỏa tốc
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
            <button
              type="submit"
              className="bg-[#254753] text-[16px] text-white py-2 px-4 rounded-md hover:bg-gray-600 w-[546px] h-[39px]"
            >
              THANH TOÁN NGAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
