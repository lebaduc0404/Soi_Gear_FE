import { useLocalStorage } from "@/common/hooks/useStorage";
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
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Test from "../../product/detail/test";
import instance from "@/config/axios";
import { CiFacebook } from "react-icons/ci";
import { ImGoogle3 } from "react-icons/im";
// import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required(),
  password: Joi.string().min(6).required(),
});
const SignIn = () => {
  const [, setUser] = useLocalStorage("user", {});
  const [userId, setUserId] = useLocalStorage("userId", null);
  // console.log(userId);

  const navigate = useNavigate();
  const form = useForm({
    resolver: joiResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      const { data } = await instance.post(`/auth/signin`, formData);
      return data;
    },
    onSuccess: async (data) => {
      await setUser(data);
      setUserId(data.user._id);
      setTimeout(() => {
        toast({
          title: "Đăng nhập thành công!",
          description: "Chuyển hướng về trang chủ...",
          variant: "success",
        });
        navigate("/");
      }, 500);
    },
    onError: (error) => {
      toast({
        title: "Đăng nhập thất bại !",
        description: "Email hoặc mật khẩu không đúng !",
        variant: "destructive",
      });
      console.log(error);
    },
  });
  const onSubmit = (data: { email: string; password: string }) => {
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
        <div className="space-y-8 w-[546px] h-[675px] bg-white p-[20px] ml-[347px]">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 ml-[-20px]"
          >
            <div className="">
              <img
                className="w-[81px] h-[81px] ml-[233px]"
                src="/Soi_Gear_FE/src/components/icons/logo.webp"
                alt=""
              />
              <h1 className="font-bold mt-[24px] ml-[218px] mb-[10px] text-[20px]">
                ĐĂNG NHẬP
              </h1>
              <hr className="w-[356px] ml-[95px] h-[1px] bg-black rounded-t-[50px]" />
            </div>
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
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
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
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <Button className="w-[356px] h-[56px] ml-[95px] text-[20px]">
              Đăng nhập
            </Button>
            <div className="flex items-center ml-[95px]">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-black bg-white border-2 border-black appearance-none checked:bg-black checked:border-transparent"
                />
                <span className="ml-2 text-[16px]">Ghi nhớ mật khẩu</span>
              </label>

              <Link to="/forgot" className="ml-[92px] text-[16px]">
                Quên mật khẩu?
              </Link>
            </div>
            <div className="">
              <div className="flex items-center">
                <hr className="w-[135px] ml-[95px] h-[0.5px] bg-black rounded-t-[50px]" />
                <span className="ml-[18px] text-[16px]"> HOẶC </span>
                <hr className="w-[135px] ml-[18px] h-[0.5px] bg-black rounded-t-[50px]" />
              </div>
              <div className="flex items-center gap-[39px] ml-[205px] mt-[15px]">
                <CiFacebook className="w-[47px] h-[47px]" />
                <ImGoogle3 className="w-[43px] h-[43px]" />
              </div>
              <div className="mt-[20px] ml-[164px]">
                <span>Bạn chưa có tài khoản?</span>
                <Link to="/signup">
                  <b>Đăng ký</b>
                </Link>
              </div>
            </div>

            <h1 style={{ display: "none" }}>{userId}</h1>
            <Test />
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignIn;
