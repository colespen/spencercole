import { Fragment, useState, useRef } from "react";

import { useTransition, animated } from "@react-spring/web";

import "./LinkPreview.scss";

import useOnLoadImages from "../../hooks/useOnLoadImages";
import useOutsideClick from "../../hooks/useOutsideClick";



export default function LinkPreview(props) {
  const { pClass, divClass, imgClass, href, image } = props;
  const [isShown, setIsShown] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);


  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);

  // const handleIsLoaded = () => {
  //   setIsLoaded(true);
  //   console.log("IMAGE LOADED? ", isLoaded);
  // };



  const handleSetIsShown = () => {
    setIsShown(!isShown);
  };
  const ref = useOutsideClick(handleSetIsShown, isShown);


  const fadeSpring = useTransition([isShown], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });


  return (
    <Fragment>
      <div ref={imgRef}>
        <p
          ref={ref}
          className={pClass}
          onClick={handleSetIsShown}
        >
          <span> {props.children} </span>

          {imageLoaded && fadeSpring((style, item) =>
            item &&
            <animated.div

              className={divClass} style={style}>
              <a className="inner-card-link"
                href={href} target="_blank" rel="noreferrer"
              >
                <img src={image} className={imgClass} alt="link popup"
                // onLoad={handleIsLoaded}
                />
              </a>
            </animated.div>
          )}

        </p>
      </div>
    </Fragment>
  );
};