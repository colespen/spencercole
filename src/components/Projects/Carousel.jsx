import { useState, useEffect, useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import useOnLoadImages from '../../hooks/useOnLoadImages';

import './Carousel.scss';

export default function Carousel(props) {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);


  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const override = {
    width: "45px",
    height: "45px",
    borderRadius: "100%",
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "rgb(158 170 191 / 58%) rgb(134 145 164) transparent",
    borderImage: "initial",
    display: "inline-block",
    animation: "0.75s cubic-bezier(0.21, 0.11, 0.74, 0.85) 0s infinite normal both running react-spinners-ClipLoader-clip",
  };


  return (
    <>
      <div className="carousel-container" ref={imgRef}
        style={{ ...mainStyle, transition: "opacity 1.5s ease" }}
      >
        {imageLoaded ?
          <div className="carousel-wrapper">

            <div
              className="carousel-content-wrapper">
              <div className="carousel-content"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {children}
              </div>
            </div>

            <div className="carousel-buttons">
              <button onClick={prev} className="left-arrow">
                <img src="./images/arrow-l.png" alt="left arrow" />
              </button>

              <button onClick={next} className="right-arrow">
                <img src="./images/arrow-r.png" alt="right arrow" />
              </button>
            </div>
          </div>
          :
          <ClipLoader
            cssOverride={override}
            size={50}
            color="#728db8"
            className="image-loading"
            id="carousel-spinner"
            aria-label="loading spinner"
          />
        }
      </div>
    </>
  );
}