import { useState } from "react";
import ProductQuery from "@/common/hooks/ProductQuery";
import { useLocalStorage } from "@/common/hooks/useStorage";
import { IProduct } from "@/common/types/product";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import { Link } from "react-router-dom";
import instance from "@/config/axios";

type ProductListProps = {
  featured?: boolean;
  data?: IProduct[];
};

const ProductList = ({ featured, data }: ProductListProps) => {
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const queryClient = useQueryClient();
  const { data: products } = ProductQuery();

  //  const getGuestId = () => {
  //    // Xác định tên của cookie mà chúng ta cần tìm
  //    const name = "guestId=";

  //    // Giải mã và chia chuỗi document.cookie thành mảng các cookie riêng lẻ
  //    const decodedCookie = decodeURIComponent(document.cookie);
  //    const cookieArray = decodedCookie.split(";");

  //    // Lặp qua từng cookie trong mảng
  //    for (let i = 0; i < cookieArray.length; i++) {
  //      let cookie = cookieArray[i];

  //      // Loại bỏ các khoảng trắng ở đầu chuỗi cookie
  //      while (cookie.charAt(0) === " ") {
  //        cookie = cookie.substring(1);
  //      }

  //      // Kiểm tra xem cookie có bắt đầu bằng tên chúng ta đang tìm không
  //      if (cookie.indexOf(name) === 0) {
  //        // Trả về giá trị của cookie, phần sau dấu "="
  //        return cookie.substring(name.length, cookie.length);
  //      }
  //    }

  //    // Nếu không tìm thấy cookie, trả về chuỗi rỗng
  //    return "";
  //  };

  //   const { mutate } = useMutation({
  //     mutationFn: async ({
  //       productId,
  //       quantity,
  //     }: {
  //       productId: string | number;
  //       quantity: number;
  //     }) => {
  //       // Construct payload with either userId or guestId
  //       const payload: {
  //         userId?: string;
  //         guestId?: string;
  //         productId: string | number;
  //         quantity: number;
  //       } = {
  //         productId,
  //         quantity,
  //       };

  //       if (userId) {
  //         payload.userId = userId;
  //       } else {
  //         payload.userId = getGuestId();
  //       }
  // console.log(payload);

  //       const { data } = await instance.post(`/carts/add-to-cart`, payload);
  //       return data;
  //     },
  //     onSuccess: () => {
  //       toast({
  //         title: "Thêm vào giỏ hàng thành công!",
  //         variant: "success",
  //       });
  //       queryClient.invalidateQueries({
  //         queryKey: ["CART", userId || "guest"],
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         title: "Đã xảy ra lỗi khi thêm vào giỏ hàng!",
  //         description: error.message,
  //         // variant: "error",
  //       });
  //     },
  //   });

  const { mutate } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string | number;
      quantity: number;
    }) => {
      const { data } = await instance.post(`/carts/add-to-cart`, {
        userId,
        productId,
        quantity,
      });
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Thêm vào giỏ hàng thành công!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["CART", userId],
      });
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  //Số lượng sản phẩm lớn nhất trong 1 trang
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const filterProduct = featured
    ? products?.filter((product: IProduct) => product.featured === featured)
    : data
    ? data
    : products;

  //Tính tổng số trang; Mat.ceil sẽ làm trò nếu trang cuối chỉ có 1 sp cũng được tính là 1 trang
  const numPages = Math.ceil((filterProduct?.length || 0) / itemsPerPage);

  const currentProducts = filterProduct?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // if (isLoading) return <div>Loading...</div>;

  const Modal = ({
    image,
    onClose,
  }: {
    image: string;
    onClose: () => void;
  }) => {
    if (!image) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={image} alt="Product" className="modal-image" />
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <style>
          {`
                        .modal-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 72.65625vw;
                            background: rgba(0, 0, 0, 0.5);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 1000;
                        }

                        .modal-content {
                            background: #fff;
                            padding: 2.71vh 1.302vw;
                            border-radius: 10px;
                            position: relative;
                        }

                        .modal-image {
                            max-width: 100%;
                            max-height: 80vh;
                        }

                        .modal-close {
                            position: absolute;
                            top: 1.355vh;
                            right: 0.651vw;
                            background: #333;
                            color: #fff;
                            border: none;
                            padding: 1.355vh 0.651vw;
                            cursor: pointer;
                            border-radius: 5px;
                        }
                    `}
        </style>
      </div>
    );
  };

  return (
    <>
      <div className="section-body">
        <div className="product-list grid grid-cols-5 gap-x-[0.065vw] gap-y-[4.336vh]">
          {currentProducts?.map((product: any, index: number) => (
            <div key={index} className="product-item">
              <div className="product-image">
                <img
                  src={product.image}
                  alt=""
                  className="product__thumbnail"
                  onClick={() => {
                    setSelectedImage(product.image);
                    setIsModalOpen(true);
                  }}
                />
                {product?.discount ? (
                  <span className="product-sale">{product?.discount}%</span>
                ) : null}
              </div>
              <div className="product-info h-[15.718vh]">
                <p className="product__name1">
                  <Link to={""} className="product__link">
                    {product.name}
                  </Link>
                </p>
                <a href="" className="product__category1">
                  {product.category.name}
                  <span className="hidden-period">.</span>
                </a>

                <div className="product-price1">
                  {product?.discount ? (
                    <>
                      <b className="product-price1">
                        $
                        {Number(product.price) -
                          (Number(product.discount) * Number(product.price)) /
                            100}
                      </b>
                      <b className="product-price1">${product.price}</b>
                    </>
                  ) : (
                    <b className="product-price1">${product.price}</b>
                  )}
                </div>
              </div>

              <div className="product-actions">
                <div className="product-action__quickview1">
                  <Link to={`/detail/${product._id}`} className="">
                    <button className="product-action__quickview1">
                      Xem chi tiết
                    </button>
                  </Link>
                </div>
                <div className="product-action__quickview1">
                  <button
                    className="product-action__addtocart"
                    onClick={() =>
                      mutate({
                        productId: product._id as any,
                        quantity: 1,
                      })
                    }
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              className={`pagination-button w-[32px] h-[32px] ${
                i === currentPage ? "active" : ""
              }`}
              onClick={() => goToPage(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal image={selectedImage!} onClose={() => setIsModalOpen(false)} />
      )}
      <style>
        {`
.product-list {
  margin-top: 4.336vh;
  margin-left: -0.976vw;
}

.product-item {
  width: 12.369vw; /* Điều chỉnh theo chiều rộng viewport */
  height: 37.669vh; /* Điều chỉnh theo chiều cao viewport */
  margin-left: 0.651vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Đảm bảo khoảng cách đều giữa các phần tử */
}

.product-item1 {
  position: relative;
}

.product-actions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Optional overlay */
  z-index: 1;
  opacity: 0; /* Hidden initially */
  transition: opacity 0.3s ease;
}


.product-action__quickview1 {
  width: 9.765vw;
  text-align: center;
  background-color: white;
  color: rgb(241, 196, 142);
  border-radius: 15px;
}

.product__thumbnail {
  width: 12.369vw;
  height: 21.815vh;
  object-fit: cover; /* Đảm bảo ảnh không bị méo */
}

.product__name1 {
  font-size: 1.897vh;
}

.product__category1 {
  font-size: 1.355vh;
}

.product-price1 {
  font-size: 1.761vh;
}

.section-body {
  height: 88.075vh;
  padding-left: 0.651vw;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2.168vh;
  gap: 0.52vw;
}

.pagination-button {
  background: #ddd;
  border: none;
  padding: 1.626vh 0.78125vw;
  cursor: pointer;
  font-size: 2.439vh;
  border-radius: 5px;
  transition: background 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-button.active {
  background: #333;
  color: #fff;
}

.pagination-button:hover {
  background: #ccc;
}
//   @media (max-width: 1024px) {
//   .product-item1 {
//     width: 20vw;
//     height: auto; /* Cho phép chiều cao tự điều chỉnh */
//     min-height: 30vh; /* Chiều cao tối thiểu dựa trên viewport */
//   }

//   .product__thumbnail {
//     width: 100%; /* Chiếm toàn bộ chiều rộng */
//     height: 15vh;
//     object-fit: cover; /* Đảm bảo hình ảnh bao phủ phần khung */
//   }
// }

// @media (max-width: 768px) {
//   .product-item1 {
//     width: 25vw;
//     height: auto; /* Cho phép chiều cao tự điều chỉnh */
//     min-height: 35vh;
//   }

//   .product__thumbnail {
//     width: 100%; /* Chiếm toàn bộ chiều rộng */
//     height: 20vh;
//     object-fit: cover;
//   }
// }

// @media (max-width: 480px) {
//   .product-item1 {
//     width: 40vw;
//     height: auto;
//     min-height: 50vh;
//   }

//   .product__thumbnail {
//     width: 100%;
//     height: 25vh;
//     object-fit: cover;
//   }
// }


.hidden-period {
  visibility: hidden;
}
                `}
      </style>
    </>
  );
};

export default ProductList;
