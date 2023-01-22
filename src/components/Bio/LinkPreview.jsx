import {
  Fragment, useState,
  // useEffect, useRef
} from "react";
import { useTransition, animated } from "@react-spring/web";
// import classNames from "classnames";

import "./LinkPreview.scss";

import useOutsideClick from "../../hooks/useOutsideClick";


export default function LinkPreview(props) {
  const { pClass, divClass, imgClass, href, image } = props;
  const [isShown, setIsShown] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);

  // const popUpClass = classNames(
  //   divClass, {
  //   "display-none": !isLoaded,
  //   "display-flex": isLoaded,
  // });

  // console.log("image", image);
  // console.log("isLoaded", isLoaded);  
  // const imgRef = useRef();

  // useEffect(() => {
  //   if (!imgRef.current) {
  //     handleIsLoaded();
  //   }
  // });
  // const handleIsLoaded = () => {
  //   if (!isLoaded) {
  //     setIsLoaded(true);
  //     console.log("IMAGE LOADED");
  //   }
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
      <p ref={ref}
        className={pClass}
        onClick={handleSetIsShown}
      >
        <span> {props.children} </span>



        {fadeSpring((style, item) =>
          item &&
          <animated.div className={divClass} style={style}>
            <a className="inner-card-link"
              href={href} target="_blank" rel="noreferrer"
            >
              <img src={image} loading={"eager"} className={imgClass} alt="link popup"
              // onLoad={handleIsLoaded}
              />
            </a>
          </animated.div>
        )}
      </p>
    </Fragment>
  );
};
