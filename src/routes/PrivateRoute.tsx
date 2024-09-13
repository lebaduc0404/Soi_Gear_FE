import { useLocalStorage } from "@/common/hooks/useStorage";
import { toast } from "@/components/ui/use-toast";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
type childrenProps = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: childrenProps) => {
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?.role;
    console.log(userId);
    
    if (userId != "admin") {
        toast({
          title: "Bạn không có quyền truy cập!",
          description: "Tự động chuyển về trang chủ",
        //   variant: "success",
        });
        return <Navigate to={"/"} />;
    } else {
        toast({
            title: "Bạn đã vào trang admin!"
        })
    }
    return children ? children : <Outlet />;
};

export default PrivateRoute;
