// import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xóa token hoặc thông tin người dùng từ localStorage hoặc sessionStorage
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");

        // Reset lại trang web (refresh)
        // window.location.reload();
      navigate("/");
    
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Đang đăng xuất...
        </h1>
      </div>
    </div>
  );
};

export default Logout;
