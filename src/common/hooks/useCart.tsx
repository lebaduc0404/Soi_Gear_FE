import { useLocalStorage } from "@/common/hooks/useStorage";
import { toast } from "@/components/ui/use-toast";
import instance from "@/config/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import { reduce } from "lodash";

type cartProps = {
  action: "INCREMENT" | "DECREMENT" | "REMOVE" | "CLEAR";
  productId?: string;
};

const useCart = () => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  // console.log(userId);

  const { data, ...restQuery } = useQuery({
    queryKey: ["CART", userId],
    queryFn: async () => {
      if (!userId) {
        throw new Error("User ID is required");
      }
      const { data } = await instance.get(`/carts/${userId}`);
      return data;
    },
    enabled: !!userId,
  });


  const { mutate } = useMutation({
    mutationFn: async ({ action, productId }: cartProps) => {
      switch (action) {
        case "INCREMENT": {
          await instance.put(
            `/carts/increase`,
            {
              userId,
              productId,
            }
          );
          toast({
            title: "Tăng số lượng thành công!",
            variant: "success",
          });
          break;
        }

        case "DECREMENT": {
          await instance.put(
            `/carts/decrease`,
            {
              userId,
              productId,
            }
          );
          toast({
            title: "Giảm số lượng thành công!",
            variant: "success",
          });
          break;
        }

        case "REMOVE": {
          await instance.post(
            `/v1/carts/remove-cart`,
            {
              userId,
              productId,
            }
          );
          toast({
            title: "Xoá sản phẩm khỏi giỏ hàng thành công!",
            description: "Sản phẩm đã được xoá khỏi giỏ hàng",
            variant: "success",
          });
          break;
        }
        case "CLEAR": {
          await instance.post(
            `/carts/clearcart`,
            {
              userId,
            }
          );
        //   toast({
        //     title: "Giỏ hàng đã được xóa!",
        //     description: "Tất cả sản phẩm đã được xóa khỏi giỏ hàng",
        //     variant: "success",
        //   });
          break;
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CART", userId],
      });
    },
  });

  const clearCart = async () => {
    await mutate({ action: "CLEAR" });
  };

  const total = () => {
    if (!data || !data.products) return 0;
    return reduce(
      data.products,
      (total, product) => {
        return total + product.price * product.quantity;
      },
      0
    );
  };

  return {
    data,
    mutate,
    clearCart, // Trả về clearCart
    total,
    ...restQuery,
  };
};

export default useCart;
