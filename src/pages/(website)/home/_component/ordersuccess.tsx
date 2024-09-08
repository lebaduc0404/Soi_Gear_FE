import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 opacity-20">
          <svg
            className="w-32 h-32 text-green-200"
            fill="currentColor"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-center text-green-700 mb-6">
          Xác Nhận Đơn Hàng
        </h2>
        <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Cảm ơn bạn đã đặt hàng!
          </h3>
          <p className="text-gray-700 mb-4">
            Đơn hàng của bạn đã được gửi đi thành công.
          </p>
          <p className="text-gray-600">
            Chúng tôi sẽ sớm liên hệ lại với bạn!
          </p>
        </div>
        <p className="text-center text-gray-500">
          Bạn sẽ được chuyển về trang chủ trong vòng 5 giây.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
