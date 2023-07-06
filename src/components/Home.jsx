import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

import Button from "./Button";

import "./styles.scss";
import "./homebuttons.scss";

export default function Home(props) {
  const { handleShowHideWindow, isPointerEvent, handleClearDraw } = props;

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
      return () => clearTimeout(timer);
    }, 100);
  }, []);

  //////    Title Movement
  const [titleSpring, titleApi] = useSpring(() => ({
    xys: [0, 0, 0.75],
    config: { mass: 5, tension: 120, friction: 150 },
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
    <>
      <div
        className="title-nav-container"
        style={{
          opacity,
          pointerEvents: isPointerEvent,
          width: "100%",
          transition: "opacity 850ms ease",
        }}
      >
        <animated.h1
          className="title"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClearDraw}
          style={{ transform: titleSpring.xys.to(perspective) }}
        >
          Spencer Cole
        </animated.h1>

        <div className="navigate">
          <Button handleShowHideWindow={handleShowHideWindow} id="projects">
            projects
          </Button>
          <Button handleShowHideWindow={handleShowHideWindow} id="bio">
            bio
          </Button>
          <Button handleShowHideWindow={handleShowHideWindow} id="contact">
            contact
          </Button>
        </div>
      </div>
    </>
  );
}
