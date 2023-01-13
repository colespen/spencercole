import { Fragment } from 'react';
import { useSpring, animated } from '@react-spring/web';

import './styles.scss';


export default function Home({ handleShowHideWindow }) {

  const [spring, api] = useSpring(() => ({
    xys: [0, 0, 0.8],
    config: { mass: 5, tension: 200, friction: 100 }
  }));

  const calcXY = (x, y) => [
    -(y - window.innerHeight / 2) / 2,
    (x - window.innerWidth / 2) / 20,
    1,
  ];


  const perspective = (x, y, s) =>
    `perspective(500px) 
   rotateX(${x}deg) 
   rotateY(${y}deg) 
   scale(${s})`;

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    api.start({ xys: calcXY(x, y) });
  };
  const handleMouseLeave = () => {
    api.start({ xys: [0, 0, 1] });
  };


  return (
    <Fragment>
      <div className="title-nav-container">

        <animated.h1 className="title"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: spring.xys.to(perspective) }}
        >Spencer Cole</animated.h1>

        <div className="navigate">
          <button className="nav-btn" id="projects"
            onClick={handleShowHideWindow}
          >projects
          </button>
          <button className="nav-btn" id="bio"
            onClick={handleShowHideWindow}
          >bio</button>
          <button className="nav-btn" id="contact"
            onClick={handleShowHideWindow}
          >contact</button>
        </div>

      </div>
    </Fragment>
  );
}