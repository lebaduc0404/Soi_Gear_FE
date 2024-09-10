// import { ICategory } from "@/common/types/product";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
// import instance from "@/config/axios";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import Joi from "joi";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";

// const categorySchema = Joi.object({
//   name: Joi.string().required().messages({
//     "any.required": "Tên danh mục không được để trống",
//     "string.empty": "Tên danh mục không được để trống",
//   }),
// });

// const CategoryEdit = () => {
//   const nav = useNavigate();
//   const { id } = useParams([]);

//   const [category, setCategory] = useState<ICategory[]>([]);
//   console.log(category);

//   useEffect(() => {
//     const Api = async () => {
//       const { data } = await instance.get(`/categories/${id}`);
//       setCategory(data);
//     };
//     Api();
//   }, []);

//   const form = useForm({
//     resolver: joiResolver(categorySchema),
//     defaultValues: {
//       name: "",
//     },
//   });
//   const queryClient = useQueryClient();
//   const { mutate } = useMutation({
//     mutationFn: async (category: { name: string }) => {
//       const { data } = await axios.put(
//         `https://soi-gear-be-3.onrender.com/api/v1/categories/${id}`,
//         category
//       );
//       return data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["CATEGORY_LIST"],
//       });
//       toast({
//         title: "Sửa danh mục thành công",
//         description: "Danh mục đã được thêm vào hệ thống",
//         variant: "success",
//       });
//       nav("/categories");
//     },
//   });

//   const onSubmit = (data: any) => {
//     mutate(data);
//   };

//   return (
//     <div className=" flex min-h-screen w-[90%]  flex-col ">
//       <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
//         <div className="grid flex-1  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel htmlFor="name">Tên danh mục:</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Nhập tên danh mục..."
//                           {...field}
//                           id="name"
//                         ></Input>
//                       </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               ></FormField>

//               <Button>Sửa danh mục</Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryEdit;
