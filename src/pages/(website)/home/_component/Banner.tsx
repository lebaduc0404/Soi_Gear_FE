import { useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const images = [
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_2.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_3.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_4.jpg?1720955587125",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollTime = 4000; // Thời gian tự động chuyển ảnh (ms)
  const transitionDuration = 300; // Thời gian chuyển đổi (ms)
  const totalImages = images.length;

  // Tự động chuyển ảnh
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
      }, transitionDuration); // Sau khi kết thúc chuyển đổi
    }, autoScrollTime);

    return () => clearInterval(intervalId); // Xóa interval khi component bị hủy
  }, [totalImages]);

  // Xử lý nút prev
  const handlePrev = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    }, transitionDuration);
  };

  // Xử lý nút next
  const handleNext = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, transitionDuration);
  };

  const handleDotClick = (index : any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden w-[72.65625vw] h-[50vh] mx-auto mt-2 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center relative">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-[${transitionDuration}ms] ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transition: `opacity ${transitionDuration}ms ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-gray-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={handlePrev}
        style={{ cursor: "pointer" }}
      >
        <MdOutlineArrowBackIosNew />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Banner;
