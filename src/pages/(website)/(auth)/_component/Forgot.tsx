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
// import axios from "axios";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const forgotPasswordSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(3)
        .required(),
});

const ForgotPassword = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: joiResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const { mutate } = useMutation({
        mutationFn: async (formData: { email: string }) => {
            const { data } = await instance.post(
                `/auth/forgot`,
                formData
            );
            return data;
        },
        onSuccess: () => {
            toast({
                title: "Yêu cầu đặt lại mật khẩu đã được gửi!",
                description: "Vui lòng kiểm tra email của bạn.",
                variant: "success",
            });
            setTimeout(() => {
                navigate("/"); // Chuyển hướng về trang chủ hoặc trang khác sau khi gửi yêu cầu
            }, 500);
        },
        onError: (error) => {
            toast({
                title: "Yêu cầu đặt lại mật khẩu thất bại!",
                description: "Có lỗi xảy ra khi gửi yêu cầu.",
                variant: "destructive",
            });
            console.log(error);
        },
    });

    const onSubmit = (data: { email: string }) => {
        mutate(data);
    };

    return (
      <>
        <Form {...form}>
          <div className="space-y-8 w-[546px] h-[auto] bg-white p-[20px] ml-[20vw]">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 ml-[-20px]"
            >
              <div className="">
                <img
                  className="w-[200px] h-[81px] ml-[172px]"
                  src={Logo}
                  alt=""
                />
                <h1 className="font-bold mt-[24px] ml-[190px] mb-[10px] text-[20px]">
                  QUÊN MẬT KHẨU
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
                        placeholder="Nhập email của bạn..."
                        type="email"
                        {...field}
                        id="email"
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <Button
                type="submit"
                className="w-[356px] h-[56px] ml-[95px] text-[20px]"
              >
                Gửi yêu cầu đặt lại mật khẩu
              </Button>
            </form>
          </div>
        </Form>
      </>
    );
};

export default ForgotPassword;
