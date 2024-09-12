import { ICategory } from "@/common/types/categories";
// import { IUsers } from "@/common/types/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import instance from "@/config/axios";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    const Api = async () => {
      const { data } = await instance.get("/categories");
      setCategory(data);
    };
    Api();
  }, []);
  console.log(category);
  

//   const handleDelete = async (id: string | number) => {
//     try {
//       if (window.confirm("Chắc chắn muốn xóa")) {
//         await instance.delete(`/categories/${id}`);
//         setCategory(category.filter((user) => user._id !== id));
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 ml-4">Thông Tin Danh Mục</h1>
      <div className="flex flex-col gap-4 mt-10">
        <Button size="sm" className="max-h-10 gap-1 ml-5 float-end">
          <PlusCircle className="h-3.5 w-3.5" />
          <Link
            to={"/admin/categories/add"}
            className="sr-only sm:not-sr-only sm:whitespace-nowrap"
          >
            Thêm danh mục
          </Link>
        </Button>
        <div className="flex font-semibold border-b pb-2">
          <div className="flex-1 px-4 text-center">Tên Danh Mục</div>
          <div className="flex-1 px-4 text-center">Ảnh Danh Mục</div>
          <div className="flex-1 px-4 text-center">Ngày Đăng Kí</div>
          <div className="w-32 px-4 text-center">Chức Năng</div>
        </div>

        {category.map((user) => (
          <div key={user._id} className="flex items-center border p-4 rounded">
            <div className="flex-1 px-4">
              <Input
                value={user.name}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            <div className="flex-1 px-4">
              <Input
                value={user.name}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            <div className="flex-1 px-4">
              <Input
                value={new Date(user.createdAt).toLocaleDateString()}
                readOnly
                className="bg-gray-100 w-full text-center"
              />
            </div>
            {/* <div className="w-32 px-4 text-center">
              <Button
                className="w-full"
                onClick={() => user._id && handleDelete(user._id)}
              >
                Xóa
              </Button>
            </div> */}
            <div>
              <Button className="w-full">
                <Link to={`/admin/categories/edit/${user._id}`}>Sửa</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
