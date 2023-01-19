import { useState, useEffect } from 'react';

import './Carousel.scss';

export default function Carousel(props) {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

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


  return (
    <div className="carousel-container"
      style={{ ...mainStyle, transition: "opacity 1.5s ease" }}
    >
      <div className="carousel-wrapper">


        <div className="carousel-content-wrapper">
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
            <img src="./arrow-l.png" alt="left arrow" />
          </button>

          <button onClick={next} className="right-arrow">
            <img src="./arrow-r.png" alt="right arrow" />
          </button>
        </div>

      </div>
    </div>
  );
}