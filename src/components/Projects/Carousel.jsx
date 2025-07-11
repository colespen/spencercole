import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Spinner } from "./loaders";
import useOnLoadImages from "../../hooks/useOnLoadImages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.scss";

export default function Carousel(props) {
  const { children } = props;

  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);

  useEffect(() => {
    if (!imageLoaded) return;
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 50);
    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <>
      <div
        className="carousel-container"
        ref={imgRef}
        style={{ ...mainStyle, transition: "opacity 750ms ease" }}
      >
        {imageLoaded ? (
          <div className="carousel-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
                el: ".carousel-pagination",
              }}
              grabCursor={true}
              touchRatio={1}
              touchAngle={45}
              threshold={10}
              longSwipesRatio={0.5}
              longSwipesMs={300}
              followFinger={true}
              allowTouchMove={true}
              simulateTouch={true}
              watchSlidesProgress={true}
              className="carousel-swiper"
            >
              {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom pagination dots - moved outside Swiper */}
            <div className="carousel-pagination"></div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
