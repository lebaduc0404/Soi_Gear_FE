import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Định nghĩa kiểu Product
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: {
    name: string;
  };
}

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<string>(""); // Thêm state để lưu trữ kiểu sắp xếp
  const query = new URLSearchParams(useLocation().search).get("query") || "";

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === "") {
        setResults([]);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null); // Reset lỗi trước khi gọi API
        const response = await axios.get(
          "http://localhost:8080/api/v1/search",
          {
            params: { searchTerm: query, sort }, // Thêm tham số sort vào yêu cầu API
          }
        );
        console.log("API response:", response); // Kiểm tra dữ liệu trả về
        setResults(response.data);
      } catch (err) {
        setError("Có lỗi xảy ra khi tìm kiếm");
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, sort]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
     <>
     <div className="section-body">
       <div className="product-list">
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
             <div className="product-info">
               <h3 className="product__name">
                 <Link to={""} className="product__link">
                   {product.name}
                 </Link>
               </h3>
               <a href="" className="product__category">
                 {product.category.name}
               </a>
               <div className="product-price">
                 {product?.discount ? (
                   <>
                     <span className="product-price__new">
                       $
                       {Number(product.price) -
                         (Number(product.discount) * Number(product.price)) /
                           100}
                     </span>
                     <span className="product-price__old">
                       ${product.price}
                     </span>
                   </>
                 ) : (
                   <span className="product-price__new">${product.price}</span>
                 )}
               </div>
             </div>
             <div className="product-actions">
               <Link
                 to={`/detail/${product._id}`}
                 className="product-action__quickview"
               >
                 Xem chi tiết
               </Link>
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
       <div className="pagination">
         {Array.from({ length: numPages }, (_, i) => (
           <button
             key={i}
             className={`pagination-button ${
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
                   .pagination {
                       display: flex;
                       justify-content: center;
                       margin-top: 16px;
                       gap: 8px;
                   }

                   .pagination-button {
                       background: #ddd;
                       border: none;
                       padding: 8px 12px;
                       cursor: pointer;
                       font-size: 16px;
                       border-radius: 5px;
                       transition: background 0.3s;
                   }

                   .pagination-button.active {
                       background: #333;
                       color: #fff;
                   }

                   .pagination-button:hover {
                       background: #ccc;
                   }
               `}
     </style>
   </>
  );
};

export default SearchPage;
