import { Fragment, useState, useRef } from "react";
import { useTransition, animated } from "@react-spring/web";
import classNames from "classnames";
import ClipLoader from "react-spinners/ClipLoader";

import "./LinkPreview.scss";

import useOnLoadImages from "../../hooks/useOnLoadImages";
import useOutsideClick from "../../hooks/useOutsideClick";



export default function LinkPreview(props) {
  const { pClass, divClass, imgClass, href, image } = props;
  const [isShown, setIsShown] = useState(false);

  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);

  const popUpDivClass = classNames(
    divClass, {
    "boxshadow-none": !imageLoaded,
  });


  const handleSetIsShown = () => {
    setIsShown(!isShown);
  };
  const clickRef = useOutsideClick(handleSetIsShown, isShown);


  const fadeSpring = useTransition([isShown], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 250 },
  });

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
    <Fragment>
      <div ref={imgRef}>
        <p
          ref={clickRef}
          className={pClass}
          onClick={handleSetIsShown}
        >
          <span> {props.children} </span>

          {imageLoaded && fadeSpring((style, item) =>
            item &&
            <animated.div
              className={popUpDivClass} style={style}>

              {imageLoaded ?

                <a className="inner-card-link"
                  href={href} target="_blank" rel="noreferrer">
                  <img src={image} className={imgClass} alt="link popup" />
                </a>
                :
                <ClipLoader
                  cssOverride={override}
                  size={50}
                  color="#728db8"
                  className="image-loading" aria-label="loading spinner"
                />
              }

            </animated.div>
          )}

        </p>
      </div>
    </Fragment>
  );
};