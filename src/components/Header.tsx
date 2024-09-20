import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartIcon, Logo, SearchIcon, UserIcon } from "./icons";
import HeaderTest from "./HeaderTest";
import { UserButton } from "@clerk/clerk-react";
import useCart from "@/common/hooks/useCart";
// import instance from "@/config/axios";
// import { IUsers } from "@/common/types/user";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State để điều khiển hiển thị menu người dùng
  const { data } = useCart();
  const navigate = useNavigate();
  // const { user, isSignedIn } = useUser(); // Lấy thông tin người dùng từ Clerk
  const userId = localStorage.getItem("userId"); // Ví dụ lấy từ localStorage
  // const [user, setUser] = useState<IUsers | null>(null);
  // const cleanedUserId = userId?.replace(/^"|"$/g, "");

  // console.log("User:", user);
  // console.log("Is Signed In:", isSignedIn);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const getTotalQuantity = () => {
    return (
      data?.products.reduce(
        (total: any, product: any) => total + product.quantity,
        0
      ) || 0
    );
  };

  // const cleanedUserId = userId?.replace(/^"|"$/g, "");

  // // console.log(cleanedUserId);
  // // const [loading, setLoading] = useState(true);

  // // Fetch dữ liệu user theo userId
  // const fetchUserData = async () => {
  //   try {
  //     if (cleanedUserId) {
  //       const { data } = await instance.get(`users/${cleanedUserId}`);
  //       setUser(data);
  //     } else {
  //       // console.error("No user ID found");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, [cleanedUserId]);
  // // console.log(userId);

  // const handleLogout = () => {
  //   // Xóa token và userId khỏi localStorage
  //   localStorage.removeItem("userToken");
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("userId");
  //   // Điều hướng đến trang đăng nhập hoặc trang chính
  //   navigate("/");
  //   window.location.reload();
  // };

  // if (loading) return <div>Loading...</div>;

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <header className="sticky top-0 left-0 w-full h-[96px] bg-white border-b border-gray-200 py-4 dark:bg-gray-800 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </Link>
        <nav className="hidden lg:flex flex-grow justify-center">
          <HeaderTest />
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-9 py-3 text-[13px] w-[258px] h-[40px] focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Tìm kiếm sản phẩm..."
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 mt-1 mr-3 text-gray-500 w-[16px] h-[16px]"
            >
              <img src={SearchIcon} alt="Search" className="w-8 h-8" />
            </button>
          </div>
          <div className="relative group">
            {!userId || userId === null ? (
              <Link to="/auth-user" className="p-2">
                <img src={UserIcon} alt="User" className="h-8" />
              </Link>
            ) : (
              <Link to="/profile" className="p-2">
                <img src={UserIcon} alt="User" className="h-8" />
              </Link>
            )}
          </div>

          <Link to="/cart" className="relative p-2 flex items-center ">
            <img src={CartIcon} alt="Cart" className="h-[32px] w-[32px]" />

            {getTotalQuantity() > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full text-xs px-2 py-1 h-[20px] w-[20px] flex items-center justify-center">
                {getTotalQuantity()}
              </span>
            )}
          </Link>
        </div>
        <div className="ml-6 ">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
