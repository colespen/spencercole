import { Fragment } from 'react';
import { useSpring, animated } from '@react-spring/web';

import './styles.scss';
import './homebuttons.scss';


export default function Home(props) {

  const {
    handleShowHideWindow, isPointerEvent, handleClearDraw
  } = props;

  //////    Title Movement
  const [titleSpring, titleApi] = useSpring(() => ({
    xys: [0, 0, 0.75],
    config: { mass: 5, tension: 120, friction: 150 }
  }));
  const calcXY = (x, y) => [
    -(y - window.innerHeight / 2) / 1.5,
    (x - window.innerWidth / 2) / 40,
    1,
  ];
  const perspective = (x, y, s) =>
    `perspective(500px) rotateX(${x}deg) 
   rotateY(${y}deg) scale(${s})`;

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    titleApi.start({ xys: calcXY(x, y) });
  };
  const handleMouseLeave = () => {
    titleApi.start({ xys: [0, 0, 0.85] });
  };
  //////

 


  return (
    <Fragment>
      <div className="title-nav-container"
        style={{
          pointerEvents: isPointerEvent,
          MaxHeight: "100%", width: "100%"
        }}
      >
        <animated.h1 className="title"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClearDraw}
          style={{ transform: titleSpring.xys.to(perspective) }}
        >Spencer Cole
        </animated.h1>

        <div className="navigate">
          <button className="btn-main" id="projects"
            onClick={handleShowHideWindow}
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
              projects
            </span>
          </button>

          <button className="btn-main" id="bio"
            onClick={handleShowHideWindow}
          >
            <span className="shadow"
            ></span>
            <span className="edge"></span>
            <span className="front">
              bio
            </span>
          </button>

          <button className="btn-main" id="contact"
            onClick={handleShowHideWindow}
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
              contact
            </span>
          </button>

        </div>

      </div>
    </Fragment>
  );
}