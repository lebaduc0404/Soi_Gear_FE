import { IProduct } from "@/common/types/product";
import instance from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { Link } from "react-router-dom";

const RelatedProduct = ({ id }: { id: string | number }) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["RELATED_PRODUCT", id],
    queryFn: async () => {
      const { data } = await instance.get(
        `/products/${id}/related`
      );
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="product-list">
        {products?.map((product: IProduct, index: number) => (
          <div key={index} className="product-item">
            <div className="product-image">
              <img src={product.image} alt="" className="product__thumbnail" />
              {product?.discount ? (
                <span className="product-sale">{product?.discount}%</span>
              ) : null}
            </div>
            <div className="product-info">
              <h3 className="product__name">
                <Link to={""} className="product__link">
                  {product.name}
                </Link>
              </h3><br />
              {/* <a href="" className="product__category1">
                {product.category.name}
              </a> */}
              <div className="product-price">
                {product?.discount ? (
                  <>
                    <span className="product-price__new">
                      $
                      {Number(product.price) -
                        (Number(product.discount) * Number(product.price)) /
                          100}
                    </span>
                    <span className="product-price__old">${product.price}</span>
                  </>
                ) : (
                  <span className="product-price__new">${product.price}</span>
                )}
              </div>
            </div>
            <div className="product-actions">
              <Link
                to={`/detail/${product._id}`}
                className="product-action__quickview1"
              >
                Xem chi tiết
              </Link>
              <button className="product-action__addtocart">
                Thêm vào giỏ
              </button>
              <div className="product-actions-more">
                <span className="product-action__share">
                  <img src="/src/assets/icons/icon-share.svg" alt="" />
                  Chia sẻ
                </span>
                <span className="product-action__compare">
                  <img src="/src/assets/icons/icon-compare.svg" alt="" />
                </span>
                <span className="product-action__like">
                  <img src="/src/assets/icons/icon-heart.svg" alt="" />
                  Thích
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
                    .product-list{
                      margin-top: 50px;

      }             
                    .product-item{
                      width: 210px;
                      heigt: 278px;
                    }
                    .product__thumbnail {
                      width: 210px;
                      height: 161px;
                      object-fit: cover; /* Giúp ảnh không bị méo */
                    }

                    .product-list{
                      display: flex;
                      justify-content: left;
                      gap: 22px; 
                    }
                      .product__name{
                        font-size:14px;
                      }

                      .product-price{
                        font-size:14px;
                      }
      `}</style>
    </>
  );
};

export default RelatedProduct;
