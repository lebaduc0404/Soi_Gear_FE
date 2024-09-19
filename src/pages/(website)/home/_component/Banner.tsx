import { useEffect, useRef } from "react";

const images = [
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_2.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_3.jpg?1720955587125",
  "https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_4.jpg?1720955587125",
];

const Banner = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageWidth = 1200; // Chiều rộng mỗi ảnh
  const gap = 30; // Khoảng cách giữa các ảnh
  const speed = 1.5; // Tốc độ cuộn

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Kiểm tra điều kiện để đảm bảo container không phải là null

    const totalWidth = (images.length * (imageWidth + gap)) / 2; // Tổng chiều rộng của tất cả các ảnh với khoảng cách
    let animationFrameId: number;
    let currentPosition = 0;

    const animate = () => {
      currentPosition += speed;
      if (currentPosition > totalWidth) {
        currentPosition = 0; // Khi ảnh cuối cùng ra ngoài, quay lại đầu
      }
      container.scrollLeft = currentPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Xử lý nút back
  const handlePrev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const newPosition = container.scrollLeft - (imageWidth + gap);
      container.scrollLeft =
        newPosition < 0
          ? container.scrollWidth / 2 - (imageWidth + gap)
          : newPosition;
    }
  };

  // Xử lý nút next
  const handleNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const newPosition = container.scrollLeft + (imageWidth + gap);
      container.scrollLeft =
        newPosition > container.scrollWidth / 2 ? 0 : newPosition;
    }
  };

  return (
    <div className="relative overflow-hidden w-[72.65625vw] h-[50vh] mx-auto mt-2 flex items-center justify-center">
      <div
        className="flex w-full overflow-x-hidden overflow-y-hidden h-full whitespace-nowrap"
        ref={containerRef}
      >
        <div
          className="flex"
          style={{
            width: `${images.length * (imageWidth + gap)}px`, // Tổng chiều rộng của tất cả các ảnh với khoảng cách
            marginRight: `-${gap}px`, // Đẩy ảnh đầu tiên về phía trái để chúng tiếp tục chạy liền mạch
          }}
        >
          {images.concat(images).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Banner ${i}`}
              className="w-[imageWidth] h-full object-cover object-center mr-[gap]"
              style={{
                width: `${imageWidth}px`,
                marginRight: `${gap}px`,
              }}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={handlePrev}
        style={{ cursor: "pointer" }}
      ></button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      ></button>
    </div>
  );
};

export default Banner;
