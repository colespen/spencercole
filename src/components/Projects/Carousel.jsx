import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Spinner } from "./loaders";
import useOnLoadImages from "../../hooks/useOnLoadImages";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.scss";

export default function Carousel(props) {
  const { children, onInteractionChange } = props;

  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = () => {
    setIsDragging(true);
    onInteractionChange?.(true);
  };

  const handleTouchEnd = () => {
    // add small delay to prevent immediate modal close
    setTimeout(() => {
      setIsDragging(false);
      onInteractionChange?.(false);
    }, 100);
  };

  const handleSlideChange = () => {
    // keep interaction active during slide changes
    onInteractionChange?.(true);
  };

  const handleTransitionEnd = () => {
    if (!isDragging) {
      onInteractionChange?.(false);
    }
  };

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
              spaceBetween={20} // add spacing between slides to prevent bleeding
              slidesPerView={1}
              slidesPerGroup={1}
              centeredSlides={false} // changed to false to prevent centering offset
              loop={false}
              width={null} // let CSS control width
              watchOverflow={true}
              resistance={true}
              resistanceRatio={0.85}
              roundLengths={true} // ensure pixel-perfect positioning
              // mobile breakpoints with smaller spacing
              breakpoints={{
                320: { spaceBetween: 15 },
                768: { spaceBetween: 20 },
                1024: { spaceBetween: 30 },
              }}
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
              preventInteractionOnTransition={false}
              observer={true}
              observeParents={true}
              updateOnWindowResize={true}
              className="carousel-swiper"
              onSlideChangeTransitionStart={handleSlideChange}
              onSlideChangeTransitionEnd={handleTransitionEnd}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
              ))}
            </Swiper>

            {/* custom pagination dots - moved outside Swiper */}
            <div className="carousel-pagination"></div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
