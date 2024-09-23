import useCart from "@/common/hooks/useCart";
import { TrashIcon } from "@/components/icons";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TbArrowBackUp } from "react-icons/tb";
import RelatedProduct from "../product/_component/RelatedProduct";
// import RelatedProduct from "../product/_component/RelatedProduct";

const CartPage = () => {
  const { data, mutate, isLoading, isError, total } = useCart();

  if (isLoading) return <div className="container text-center">Loading...</div>;
  if (isError)
    return (
      <h2 className="container text-center">
        Bạn chưa thêm sản phẩm nào vào giỏ hàng!
      </h2>
    );

  const hasProducts = data?.products.length > 0;
  
  const handleBuyNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasProducts) {
      e.preventDefault();
      alert("Giỏ hàng của bạn đang trống!");
    }
  };

  return (
    <>
      <div className="container-5 rounded-lg">
        <section className="bg-white filters w-[1116px] h-[40px] mt-[-40px] ml-[-15px]">
          <div className="container">
            <div className="filters-around">
              <div className="filters-choose mt-[-43px]">
                <div className="filters-choose__action">
                  <span className="filters__text text-[15px]">Trang Chủ</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                </div>

                <div className="filters-show">
                  <span className="filters-show__text text-[15px]">
                    Giỏ hàng
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto p-8 mt-[-50px] mb-5 flex ml-[-48px]">
          <div className="bg-white h-[auto]">
            <div className="ml-[15px]">
              <h1 className="text-4xl font-bold mb-8 mt-[20px]">GIỎ HÀNG</h1>
              <hr className="w-[807px] h-[1.5px] bg-black mt-[-13px] border-none my-5" />
            </div>
            <div className="flex">
              <div className="bg-white divide-gray-200 w-[831px]">
                {data?.products.map((product: any, index: number) => (
                  <div
                    key={index}
                    className="flex mb-[20px] mt-[15px] ml-[15px]"
                  >
                    <div className="">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[140px] h-[100px] object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-[16px]">
                      <div className="text-[21px] font-sans w-[200px] whitespace-nowrap text-sm text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-[18px] font-medium whitespace-nowrap text-sm text-gray-500 mt-[58px]">
                        <b>{product.price} đ</b>
                      </div>
                    </div>
                    <div className="flex mt-[60px] ml-[39px] whitespace-nowrap">
                      <h2 className="mt-[4px] mr-[16px] text-[16px]">
                        Số lượng:
                      </h2>
                      <div className="flex items-center rounded-[8px] w-[100px] h-[35px] border border-gray-400 pl-[25px]">
                        <button
                          className=""
                          onClick={() =>
                            mutate({
                              action: "DECREMENT",
                              productId: product.productId,
                            })
                          }
                        >
                          -
                        </button>
                        <span className="mx-4">{product.quantity}</span>
                        <button
                          className=""
                          onClick={() =>
                            mutate({
                              action: "INCREMENT",
                              productId: product.productId,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="whitespace-nowrap mt-[3px] ml-[10px] text-sm font-medium">
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <img
                              src={TrashIcon}
                              alt="Remove"
                              className="w-[27px] h-[27px] text-red-500 cursor-pointer"
                            />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Bạn có muốn xoá sản phẩm khỏi giỏ hàng?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Sản phẩm sẽ bị xoá khỏi giỏ hàng
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Huỷ</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() =>
                                  mutate({
                                    action: "REMOVE",
                                    productId: product.productId,
                                  })
                                }
                              >
                                Đồng ý
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                    <div className="mt-[51.5px] text-[20px] font-medium text-red-500 ml-[90px] whitespace-nowrap text-sm text-gray-500">
                      {product.price * product.quantity} đ
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 border-white w-[261px] h-[420px] ml-[30px]">
            <div className="flex justify-between items-center mb-2 mt-[5px]">
              <span className="text-gray-700 text-[16px] font-bold">
                Thành tiền:
              </span>
              <span className="text-red-500 font-semibold text-[21px]">
                {total()} đ
              </span>
            </div>
            <hr className="w-[221px] h-[1px] bg-black border-none my-5" />
            <div className="justify-between items-center mb-4 mt-[-15px]">
              <span className="text-gray-700 text-[16px] font-bold">
                Ghi chú đơn
              </span>
              <textarea
                className="bg-gray-200 w-[221px] h-[140px] shadow-[5px] p-2 mt-[5px]"
                rows={6}
              ></textarea>
            </div>
            <Link
              to={hasProducts ? "/order" : "#"}
              className={`inline-block w-[221px] h-[42px] py-2 px-4 mt-[20px] text-center text-white rounded-md shadow-sm bg-[#254753] hover:bg-gray-800 ${
                !hasProducts ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={handleBuyNowClick}
            >
              THANH TOÁN NGAY
            </Link>
            <Link
              to={hasProducts ? "/" : "#"}
              className={`flex inline-block w-[221px] h-[42px] py-2 px-4 mt-[8px] text-center text-[#254753] rounded-md shadow-sm bg-gray-300 hover:bg-gray-400 ${
                !hasProducts ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={handleBuyNowClick}
            >
              <TbArrowBackUp className="w-[24px] h-[24px] ml-[13px] mr-[5px]" />
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
        {/* <section className="product">
          <div className="container_01 w-[1116px] h-[430px] bg-white mt-[24px] ml-[30px] rounded-[10px]">
            <div className="container">
              <div className="section-heading w-[100%] ml-[-5px]">
                <h2 className="section-heading__title text-[24px]">
                  BẠN CÓ THỂ QUAN TÂM
                </h2>
              </div>
              <RelatedProduct id={data.category._id} />
            </div>
          </div>
        </section> */}
        {/* <section className="product">
          <div className="container_01 w-[1116px] h-[430px] bg-white mt-[24px] rounded-[10px]">
            <div className="container">
              <div className="section-heading w-[100%] ml-[-5px]">
                <h2 className="section-heading__title text-[24px]">
                  BẠN CÓ THỂ QUAN TÂM
                </h2>
              </div>
              <RelatedProduct id={data.category._id} />
            </div>
          </div>
        </section> */}
      </div>
      <style>{`
      .container-5 {
    // background-color: #ffffff;
    width: 100%; /* Sử dụng đơn vị % để tự động điều chỉnh kích thước */
    max-width: 1116px; /* Đặt kích thước tối đa */
    margin: 20px auto; /* Canh giữa phần tử và tạo khoảng cách trên/dưới */
    padding: 20px; /* Thêm padding để nội dung không sát biên */
}

@media screen and (max-width: 768px) {
    .container-5 {
        width: 90%; /* Khi màn hình nhỏ, tăng chiều rộng lên 90% */
        margin-left: 10px; /* Điều chỉnh margin cho thiết bị nhỏ */
    }
}

@media screen and (max-width: 480px) {
    .container-5 {
        width: 100%; /* Chiều rộng 100% cho màn hình nhỏ hơn */
        margin-left: 0; /* Margin bằng 0 để tiết kiệm không gian */
    }
}
      `}</style>
    </>
  );
};

export default CartPage;
