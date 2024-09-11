// // ProfilePage.js
// import { useUser } from "@clerk/clerk-react";

// const ProfilePage = () => {
//   const { user, isSignedIn } = useUser();

//   if (!isSignedIn) {
//     return <p className="text-center mt-10">You are not signed in.</p>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
//       <h1 className="text-2xl font-bold mb-4">User Profile</h1>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Full Name:
//           </label>
//           <p className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm">
//             {user?.firstName} {user?.lastName}
//           </p>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Email:
//           </label>
//           <p className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm">
//             {user?.primaryEmailAddress?.emailAddress}
//           </p>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Username:
//           </label>
//           <p className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm">
//             {user?.username || "N/A"}
//           </p>
//         </div>
//         {/* Additional user details can be added here */}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import { IUsers } from "@/common/types/user";

import { useEffect, useState } from "react";
import instance from "@/config/axios"; // Axios instance đã cấu hình
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const ProfilePage = () => {
  // State để lưu thông tin user
  const [user, setUser] = useState<IUsers>([]);
  const nav = useNavigate();
  // Lấy user ID từ token hoặc localStorage sau khi đăng nhập (cần điều chỉnh tùy vào cách bạn quản lý auth)
  const userId = localStorage.getItem("userId"); // Ví dụ lấy từ localStorage
  // console.log(userId);
  const cleanedUserId = userId?.replace(/^"|"$/g, "");

  // console.log(cleanedUserId);
  const [loading, setLoading] = useState(true);

  // Fetch dữ liệu user theo userId
  const fetchUserData = async () => {
    try {
      if (cleanedUserId) {
        const { data } = await instance.get(`users/${cleanedUserId}`);
        setUser(data);
      } else {
        console.error("No user ID found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [cleanedUserId]);
  // console.log(userId);

  const handleLogout = () => {
    // Xóa token và userId khỏi localStorage
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
      // Điều hướng đến trang đăng nhập hoặc trang chính
      nav("/");
      window.location.reload();
      
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-xl shadow-xl border border-gray-200">
        <div className="flex items-center space-x-6">
          {user.avatar && (
            <img
              className="w-24 h-24 rounded-full border-4 border-blue-500"
              src={user.avatar}
              alt="User Avatar"
            />
          )}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              {user.name || "Unnamed User"}
            </h2>
            <p className="text-lg text-gray-600">{user.email || "N/A"}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
          <p className="mt-3 text-gray-700">
            I am a software developer specializing in building exceptional
            digital experiences. Currently, I am focused on developing
            responsive full-stack web applications.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Đăng xuất
          </button>
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/forgot">
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Quên Mật Khẩu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
