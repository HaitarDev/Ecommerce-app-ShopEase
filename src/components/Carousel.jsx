import { useState, useEffect, useCallback } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const slides = [
    "/src/assets/slider-img-1.png",
    "/src/assets/slider-img-2.png",
    "/src/assets/slider-img-3.png",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000); // Change slide every 5 seconds (5000 milliseconds)

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full group mt-[6.5rem] md:mt-[7.4rem]">
      <div className="w-full bg-center">
        <img
          src={slides[currentIndex]}
          alt=""
          className={`carousel-image ${
            currentIndex === 0
              ? "first"
              : currentIndex === slides.length - 1
              ? "last"
              : ""
          }`}
        />
      </div>
      <div className="arrow absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiArrowLeft onClick={prevSlide} />
      </div>
      <div className="arrow absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiArrowRight onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Carousel;
