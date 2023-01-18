import { Fragment, useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import "./LinkPreview.scss";

import useOutsideClick from "../../hooks/useOutsideClick";

export default function LinkPreview(props) {
  const { href, image } = props;
  const [isShown, setIsShown] = useState(false);

  const fadeSpring = useTransition(isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleSetIsShown = () => {
    setIsShown(!isShown);
  };

  const ref = useOutsideClick(handleSetIsShown, isShown);


  return (
    <Fragment>
      <p ref={ref}
        className="link-with-preview"
        onClick={handleSetIsShown}
      >
        <span> {props.children} </span>

        {fadeSpring((style, item) =>
          item &&
          <animated.div className="card" style={style}>
            <a className="inner-card-link"
              href={href} target="_blank" rel="noreferrer">
              <img src={image} className="card-img-top" alt="link popup" />
            </a>
          </animated.div>
        )}

      </p>
    </Fragment>
  );
};
