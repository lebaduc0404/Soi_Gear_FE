import ProductQuery from "@/common/hooks/ProductQuery";
import { useParams } from "react-router-dom";
import RelatedProduct from "../_component/RelatedProduct";
import { useLocalStorage } from "@/common/hooks/useStorage";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import { useEffect, useState } from "react";
import instance from "@/config/axios";
import Test from "@/pages/test/test";

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
      <Test />
      <div className="btn_0 ml-[20px]">
        <section className="bg-white filters w-[1116px] mt-[-40px] h-[40px]">
          <div className="container">
            <div className="filters-around">
              <div className="filters-choose mt-[-43px]">
                <div className="filters-choose__action">
                  <span className="filters__text text-[15px]">Trang Chủ</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                  <span className="filters__text text-[15px]">Sản Phẩm</span>
                  <img src="/src/assets/icons/next.svg" alt="" />
                </div>

                <div className="filters-show">
                  <span className="filters-show__text text-[15px]">
                    {data.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="">
            <div className="products-around w-[1116px] h-[468px] mt-[-30px] bg-white rounded-[10px]">
              <div className="products-img mt-[18px] ml-[38px]">
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
                <h4 className="products__price text-red-500 text-[32px] mt-[-18px]">
                  Giá ưu đãi: ${data.price}
                </h4>
                <div className="btn_1">
                  <div className="quantity-container">
                    <h2>Số lượng:</h2>
                    <div className="products-btn__count h-[42px] w-[125px]">
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
          <div className="">
            <div className="description-header-container w-[1116px]">
              <div className="description-header w-[736px] h-[560px] mt-[24px] bg-white rounded-[10px]">
                <div className="ml-[40px]">
                  <h2 className="description__title active">Mô tả sản phẩm</h2>
                </div>
                <div className="products-info__more ml-[40px] mt-[24px]">
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
                <div className="image ml-[40px]">
                  <img src={data.gallery[0]} alt="" />
                </div>
              </div>

              <div className="description-header_1 bg-white w-[356px] h-[289px] mt-[24px] ml-[20px] rounded-[10px]">
                <div className="ml-[30px]">
                  <h2 className="description__title active">
                    Thông số kỹ thuật
                  </h2>
                </div>
                <div className="products-info__more mt-[5px] ml-[30px]">
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
        </section>
        <hr className="hr" />
      </div>
      <style>{`
.btn_0 {
    width: 100%;
    max-width: 1116px;
    margin: 20px auto;
    padding: 20px;
}

@media screen and (max-width: 768px) {
    .btn_0 {
        width: 90%; /* Khi màn hình nhỏ, tăng chiều rộng lên 90% */
        margin-left: 10px; /* Điều chỉnh margin cho thiết bị nhỏ */
    }
}

@media screen and (max-width: 480px) {
    .btn_0 {
        width: 100%; /* Chiều rộng 100% cho màn hình nhỏ hơn */
        margin-left: 0; /* Margin bằng 0 để tiết kiệm không gian */
    }
}
.products-img {
  display: flex;
  flex-direction: column; /* Sắp xếp các phần tử theo chiều dọc */
  align-items: center; /* Canh giữa theo chiều ngang nếu cần */
  width: 428px;
  height: 428px;
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
   margin-top: -8px;
   margin-left: -150px;
}

.products-btn__count {
  display: flex;
  align-items: center;
}

.products-btn__count button {
  width: 7px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  }

.quantity-container {
  display: flex;
  align-items: center;
  hieght: 42px;
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
