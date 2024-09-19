// import React from "react";

import { ICategory } from "@/common/types/categories";
import instance from "@/config/axios";
// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const images = [
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/zoom65v2-exploded2-vuong.jpg?v=1679055931887",
//     caption: "Bàn phím cơ",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/15307-cherry-mx-keycap-r2-translucent-black-01.jpg?v=1634229563697",
//     caption: "Keycap",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/f0048a3ee665ce54d0dd82cc89ddc026.jpg?v=1634229637710",
//     caption: "Phụ kiện",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/10r.jpg?v=1679055556480",
//     caption: "RK  ",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/base.jpg?v=1679054732477",
//     caption: "Keycap Cherry",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/61ifhaojxwl-ac-sy450.jpg?v=1634229851633",
//     caption: "Keycap OEM",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/o1cn01sxqv5z2dpsaupksjc-35038659.jpg?v=1634402688307",
//     caption: "Dầu lube",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/3b7c3ec0f91039567075815f7288bfc1.jpg?v=1634229979927",
//     caption: "Dụng cụ lube",
//   },
//   {
//     src: "https://bizweb.dktcdn.net/thumb/small/100/438/322/collections/51935-mat-truoc-co-khoa-cua-tui-dung-ban-phim-leopold-keyboard-pouch-full-size-467-x-160-x-40mm-cobalt-blue.jpg?v=1634230021157",
//     caption: "Túi đựng phím",
//   },
// ];

const Carousel = () => {
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    const Api = async () => {
      const { data } = await instance.get("/categories");
      setCategory(data);
    };
    Api();
  }, []);
  // console.log(category);
    
  
  return (
    <div className="carousel-wrapper">
      {category.map((image, i) => (
        <div key={image._id} className="carousel-container">
          <Link to={`/categories/${image._id}`}>
            <div className="carousel-item mx-4">
              <img
                src={image.avatar}
                alt={`Carousel ${i}`}
                className="carousel-image"
                style={{ animationDelay: `${i * 1}s` }}
              />
              <div className="carousel-caption">{image.name}</div>
            </div>
          </Link>
        </div>
      ))}
      <style>
        {`
          .carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw; /* Chiếm 80% chiều rộng của viewport */
  height: 27vh; /* Chiều cao của carousel dựa trên viewport height */
  margin: 0 auto; /* Căn giữa theo chiều ngang */
  margin-top: 44px; /* Khoảng cách phía trên */
  overflow: hidden;
}

.carousel-container {
  display: flex;
  gap: 10vw; /* Khoảng cách giữa các phần tử */
  flex-direction: row;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px; /* Chiều rộng của phần tử chứa */
  height: 200px; /* Chiều cao của phần tử chứa (bao gồm cả khoảng cách cho caption) */
  position: relative;
  overflow: hidden;
}

.carousel-image {
  width: 80%; /* Chiếm 80% chiều rộng của phần tử chứa */
  height: 60%; /* Đảm bảo tỷ lệ hình ảnh không bị thay đổi */
  object-fit: cover; /* Cắt ảnh sao cho vừa khung hình tròn */
  border-radius: 50%; /* Tạo hình tròn cho ảnh */
  border: 1px solid #999999;
  margin-bottom: 1rem; /* Khoảng cách giữa ảnh và tên (kích thước tương đối) */
  margin-top: 2rem; /* Khoảng cách từ phần trên của phần tử chứa đến ảnh (kích thước tương đối) */
  animation: rotate 10s linear infinite;
}

.carousel-caption {
  text-align: center;
  font-weight: 600;
  font-size: 1rem; /* Kích thước chữ (có thể thay đổi tùy thuộc vào yêu cầu) */
  color: #333;
}

// @keyframes rotate {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
        `}
      </style>
    </div>
  );
};

export default Carousel;
