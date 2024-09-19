import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./_component/SignIn";
import SignUp from "./_component/SignUp";
import ForgotPassword from "./_component/Forgot";
import { useState } from "react";
// import { SignInButton } from "@clerk/clerk-react";

const AuthPage = () => {

  const [activeTab, setActiveTab] = useState("signin"); // State for managing the active tab

  // Function to handle switching to the Sign In tab
  const handleSignUpSuccess = () => {
    setActiveTab("signin");
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      defaultValue="signin"
      className="w-[80%] container"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="signin">Đăng nhập</TabsTrigger>
        <TabsTrigger value="signup">Đăng ký</TabsTrigger>
        <TabsTrigger value="forgot">Quên mật khẩu</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
            <SignIn />
      </TabsContent>
      <TabsContent value="signup">
            <SignUp onSignUpSuccess={handleSignUpSuccess} />
      </TabsContent>
      <TabsContent value="forgot">
        <Card>
          <CardHeader>
            <CardTitle>Quên mật khẩu</CardTitle>
            <CardDescription>
              Nhập địa chỉ email của bạn để nhận hướng dẫn đặt lại mật khẩu.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ForgotPassword />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AuthPage;
