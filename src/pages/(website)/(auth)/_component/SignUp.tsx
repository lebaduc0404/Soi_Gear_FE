import React from "react";
import { Logo } from "@/components/icons";
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

const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
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
      await instance.post(`/auth/signup`, formData);
    },
    onSuccess: () => {
      toast({
        title: "Đăng ký thành công, chuyển qua trang đăng nhập!",
        variant: "success",
      });
      setTimeout(() => {
        onSignUpSuccess();
      }, 5000);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          title: "Đăng ký thất bại!",
          description: "Email đã trùng!",
          variant: "destructive",
        });
      } else {
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
    <Form {...form}>
      <div className="space-y-8 w-[546px] h-[835px] bg-white p-[20px] ml-[347px]">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 ml-[-20px]"
        >
          <div>
            <img
              className="w-[200px] h-[81px] ml-[172px]"
              src={Logo}
              alt="Logo"
            />
            <h1 className="font-bold text-[20px] mt-[24px] ml-[180px] mb-[10px]">
              ĐĂNG KÝ TÀI KHOẢN
            </h1>
            <hr className="w-[356px] ml-[95px] h-[1px] bg-black rounded-t-[50px]" />
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-[356px] h-[66px] ml-[95px]">
                <FormLabel htmlFor="name" className="text-[15px]">
                  Họ và tên:
                </FormLabel>
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
                <FormLabel htmlFor="email" className="text-[15px]">
                  Email:
                </FormLabel>
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
                <FormLabel htmlFor="password" className="text-[15px]">
                  Mật khẩu:
                </FormLabel>
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
                <FormLabel htmlFor="confirmPassword" className="text-[15px]">
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

          <Button
            type="submit"
            className="text-[20px] w-[356px] h-[56px] ml-[95px]"
          >
            Đăng ký
          </Button>

          <div>
            <div className="flex items-center">
              <hr className="w-[135px] ml-[95px] h-[0.5px] bg-black rounded-t-[50px]" />
              <span className="ml-[18px]"> HOẶC </span>
              <hr className="w-[135px] ml-[18px] h-[0.5px] bg-black rounded-t-[50px]" />
            </div>
            <div className="flex items-center gap-[39px] ml-[205px] mt-[15px]">
              <CiFacebook className="w-[47px] h-[47px]" />
              <ImGoogle3 className="w-[43px] h-[43px]" />
            </div>
            <div className="text-[16px] mt-[20px] ml-[164px]">
              <span>Bạn đã có tài khoản?</span>
              <Link to="/signin">
                <b>Đăng nhập</b>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SignUp;
