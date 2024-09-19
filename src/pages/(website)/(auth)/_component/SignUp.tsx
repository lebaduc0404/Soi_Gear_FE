// import React from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import instance from "@/config/axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { CiFacebook } from "react-icons/ci";
import { ImGoogle3 } from "react-icons/im";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // Nhập hook useNavigate

const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

interface SignUpProps {
  onSignUpSuccess: () => void;
}

//React.FC<SignUpProps> đảm bảo kiểu dữ liệu
const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
  //   const navigate = useNavigate(); // Khởi tạo hook useNavigate
  const form = useForm({
    resolver: joiResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (formData: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => {
      await instance.post(
        `/auth/signup`,
        formData
      );
    },
    onSuccess: (data) => {
      toast({
        title: "Đăng ký thành công,chuyển qua trang đăng nhập!",
        variant: "success",
      });
        //   navigate("/auth-user");
        setTimeout(() => {
            onSignUpSuccess();
        },5000)
      
      return data;
    },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          // Access the response data safely
          console.log("Error Response:", error.response?.data);
          toast({
            title: "Đăng ký thất bại!",
            description: "Email đã trùng!",
            variant: "destructive",
          });
          console.log(error);
        } else {
          // Handle non-Axios errors
          console.error("An unexpected error occurred:", error);
        }
    },
  });

  const onSubmit = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    mutate(data);
  };

  return (
    <>
      {/* <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="signin">Đăng nhập</TabsTrigger>
        <TabsTrigger value="signup">Đăng ký</TabsTrigger>
        <TabsTrigger value="forgot">Quên mật khẩu</TabsTrigger>
      </TabsList> */}
      <Form {...form}>
        <div className="space-y-8 w-[546px] h-[835px] bg-white p-[20px] ml-[347px]">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 ml-[-20px]"
          >
            <div className="">
              <img
                className="w-[81px] h-[81px] ml-[233px]"
                src="../../../../components/icons/logo.webp"
                alt=""
              />
              <h1 className="mt-[24px] ml-[200px] mb-[10px]">
                ĐĂNG KÝ TÀI KHOẢN
              </h1>
              <hr className="w-[356px] ml-[95px] h-[1px] bg-black rounded-t-[50px]" />
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-[356px] h-[66px] ml-[95px]">
                  <FormLabel htmlFor="name">Họ và tên:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập họ và tên..."
                      type="text"
                      {...field}
                      id="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[356px] h-[66px] ml-[95px]">
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập email..."
                      type="email"
                      {...field}
                      id="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-[356px] h-[66px] ml-[95px]">
                  <FormLabel htmlFor="password">Mật khẩu:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập mật khẩu..."
                      type="password"
                      {...field}
                      id="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-[356px] h-[66px] ml-[95px]">
                  <FormLabel htmlFor="confirmPassword">
                    Xác nhận mật khẩu:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập mật khẩu..."
                      type="password"
                      {...field}
                      id="confirmPassword"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-[356px] h-[56px] ml-[95px]">
              Đăng ký
            </Button>

            <div className="">
              <div className="flex items-center">
                <hr className="w-[135px] ml-[95px] h-[0.5px] bg-black rounded-t-[50px]" />
                <span className="ml-[18px]"> HOẶC </span>
                <hr className="w-[135px] ml-[18px] h-[0.5px] bg-black rounded-t-[50px]" />
              </div>
              <div className="flex items-center gap-[39px] ml-[205px] mt-[15px]">
                <CiFacebook className="w-[47px] h-[47px]" />
                <ImGoogle3 className="w-[43px] h-[43px]" />
              </div>
              <div className="mt-[20px] ml-[164px]">
                <span>Bạn đã có tài khoản?</span>
                <Link to="/signin">
                  <b>Đăng nhập</b>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
