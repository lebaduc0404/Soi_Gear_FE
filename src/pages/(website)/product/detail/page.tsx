import ProductQuery from "@/common/hooks/ProductQuery";
import { useParams } from "react-router-dom";
import RelatedProduct from "../_component/RelatedProduct";
import { useLocalStorage } from "@/common/hooks/useStorage";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import { useEffect, useState } from "react";
import instance from "@/config/axios";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = ProductQuery(id);
  const [user] = useLocalStorage("user", {});
  // console.log('gallery', data?.gallery[0])
  const [avatar, setAvatar] = useState(data?.gallery[0]);
  const [galleries, setGalleries] = useState(data?.gallery);
  const userId = user?.user?._id;
  const queryClient = useQueryClient();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (data?.gallery) {
      setAvatar(data.gallery[0]);
      setGalleries(data.gallery);
    }
  }, [data]);

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(
      quantity > 1 ? (quantity) => quantity - 1 : (quantity) => quantity
    );
  };
  const handleBuyNow = () => {
    window.location.href = "/order";
  };
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="btn_0">
        <section className="filters">
          <div className="container">
            <div className="filters-around">
              <div className="filters-choose">
                <div className="filters-choose__action">
                  <span className="filters__text">Trang Chủ</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                  <span className="filters__text">Sản Phẩm</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                </div>

                <div className="filters-show">
                  <span className="filters-show__text">{data.name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <div className="products-around">
              <div className="products-img">
                <div className="products-img__thumbnail">
                  <img src={avatar} alt="" />
                </div>
                <div className="products-img__gallery">
                  <ul className="products-img__list">
                    {galleries !== undefined &&
                      galleries.map((item: string) => (
                        <li
                          key={item}
                          className="products-img__item"
                          onClick={() => setAvatar(item)}
                        >
                          <img src={item} alt="" />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="products-info">
                <h2 className="products__name">{data.name}</h2>
                <div className="products-description w-auto ">
                  <p>Phân loại: {data.description}</p>
                </div>
                <div className="products-info__judge">
                  <div className="products__star">
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star.svg" alt="" />
                    <img src="/src/assets/icons/star-half.svg" alt="" />
                  </div>
                  <div className="products__review">
                    <span>Sản phẩm có đánh giá tốt</span>
                  </div>
                </div>
                <h4 className="products__price text-red-500">
                  Giá ưu đãi: ${data.price}
                </h4>
                <div className="btn_1">
                  <div className="quantity-container">
                    <h2>Số lượng:</h2>
                    <div className="products-btn__count">
                      <button className="minus" onClick={decreaseQuantity}>
                        -
                      </button>
                      <span>{quantity}</span>
                      <button className="plus" onClick={increaseQuantity}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="button-container">
                    <button
                      className="products__btn btn1 text-white"
                      onClick={() =>
                        mutate({
                          productId: data._id,
                          quantity: quantity,
                        })
                      }
                    >
                      Thêm Vào Giỏ
                    </button>
                    <button
                      className="products__btn btn2 bg-blue-600 text-white"
                      onClick={handleBuyNow}
                    >
                      Mua Ngay
                    </button>
                  </div>
                </div>
                <hr className="hr" />
                {/* <div className="products-info__more">
                  <div className="products__group">
                    <span className="products__title">Tên Sản Phẩm</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">{data.name}</span>
                  </div>
                  <div className="products__group">
                    <span className="products__title">Phân Loại</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Phím Cơ</span>
                  </div>

                  <div className="products__group">
                    <span className="products__title">Chia Sẻ</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">
                      <img src="/src/assets/icons/fb.svg" alt="" />
                      <img src="/src/assets/icons/linkedin.svg" alt="" />
                      <img src="/src/assets/icons/twitter.svg" alt="" />
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <hr className="hr" />
        <section className="description">
          <div className="container">
            <div className="description-header-container">
              <div className="description-header">
                <div className="">
                  <h2 className="description__title active">Mô tả sản phẩm</h2>
                </div>
                <div className="products-info__more">
                  <div className="products__group">
                    <span className="products__title">Tên Sản Phẩm</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">{data.name}</span>
                  </div>
                  <div className="products__group">
                    <span className="products__title">Phân Loại</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">
                      {data.description}
                    </span>
                  </div>
                </div>
                <div className="image">
                  <img src={data.gallery[0]} alt="" />
                </div>
              </div>

              <div className="description-header_1">
                <div className="">
                  <h2 className="description__title active">
                    Thông số kỹ thuật
                  </h2>
                </div>
                <div className="products-info__more">
                  <div className="products__group1">
                    <span className="products__title">Hãng sản xuất</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Hãng ...</span>
                  </div>
                  <div className="products__group1">
                    <span className="products__title">Phân Loại</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">
                      {data.description}
                    </span>
                  </div>
                  <div className="products__group1">
                    <span className="products__title">Model</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Artisan</span>
                  </div>
                  <div className="products__group1">
                    <span className="products__title">Kiểu dáng</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Như ảnh</span>
                  </div>
                  <div className="products__group1">
                    <span className="products__title">Màu sắc</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Như ảnh</span>
                  </div>
                  <div className="products__group1">
                    <span className="products__title">Keycap</span>
                    <span className="products__colons">:</span>
                    <span className="products__description">Sử dụng ...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="hr" />
        <section className="product">
          <div className="container_01">
            <div className="container">
              <h1 className="related-product__title">Có Thể Bạn Quan Tâm</h1>
              <RelatedProduct id={data.category._id} />
            </div>
          </div>
        </section>
        <hr className="hr" />
      </div>
      <style>{`

.btn_0{
  width: 1200px;
  margin-left: 162px;
}
.products-img {
  display: flex;
  flex-direction: column; /* Sắp xếp các phần tử theo chiều dọc */
  align-items: center; /* Canh giữa theo chiều ngang nếu cần */
  width: 428px;
  height: 458px;
}

.products-img__thumbnail {
  margin-bottom: 10px;
}

.products-img__thumbnail img {
  height: 302px;
  width: 428px;
  object-fit: cover;
}


.products-img__gallery {
  width: 100%;
  margin-top:14px;
}

.products-img__list {
  display: flex;
  justify-content: center; /* Canh giữa các mục trong gallery */
  gap: 6.67px; /* Khoảng cách giữa các ảnh nhỏ trong gallery */
}

.products-img__item img {
  width: 102px;
  height: 102px;
  object-fit: cover;
}
.products-info{
   width: 568px;
   height: 428px;
   margin-top: -23px;
}

.products-btn__count {
  display: flex;
  align-items: center;
}

.products-btn__count button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  }

.quantity-container {
  display: flex;
  align-items: center;
  gap: 32px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: -10px
}
  .btn_1 {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn1 {
background-color: #DEDEDE;
}

.btn2 {
background-color: #DEDEDE;
}

.products__price{
  padding-top: 65px;
}

.products__btn {
  display: flex;
  justify-content: center;  /* Căn giữa theo chiều ngang */
  align-items: center;      /* Căn giữa theo chiều dọc */
  width: 568px;
  height: 42px;
  color: black;             /* Màu chữ trắng */
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.products__btn:hover {
  background-color: #2563eb;
}
// .description-header{
//   width:736px;
//   height:560px;
// }

.description-header-container {
  display: flex;
  justify-content: space-between; /* Tạo khoảng cách giữa 2 phần */
  gap: 10px;
}

.description-header {
  flex: 2.5;
  display: flex;
  flex-direction: column;
}

.description-header_1 {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.image img {
  width: 656px;
  height: 372px;
  object-fit: cover;
}

.products__group1 {
  display: flex;
  align-items: center; /* Canh giữa các phần tử theo chiều dọc */
  gap: 36px;
}
      `}</style>
    </>
  );
};

export default ProductDetail;
