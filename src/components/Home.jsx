import { Fragment } from 'react';
import { useSpring, animated } from '@react-spring/web';

import './styles.scss';
import './homebuttons.scss';


export default function Home({ handleShowHideWindow }) {

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


  return (
    <Fragment>
      <div className="title-nav-container">

        <animated.h1 className="title"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: titleSpring.xys.to(perspective) }}
        >Spencer Cole</animated.h1>


        <div className="navigate"
        >
          <button class="btn-main" id="projects"
            onClick={handleShowHideWindow}
            style={{ transform: 'perspective(45px) rotateX(4deg) rotateY(2deg)' }}
          >
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">
              projects
            </span>
          </button>

          <button class="btn-main" id="bio"
            onClick={handleShowHideWindow}
          >
            <span class="shadow"
            style={{width:"99%", left: "1px"}}
            ></span>
            <span class="edge"></span>
            <span class="front">
              bio
            </span>
          </button>

          <button class="btn-main" id="contact"
            onClick={handleShowHideWindow}
            style={{ transform: 'perspective(40px) rotateX(9deg) rotateY(-2deg)' }}
          >
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">
              contact
            </span>
          </button>

          {/* <button  className="nav-btn" id="projects"
            onClick={handleShowHideWindow}
            // onMouseEnter={}
            // onMouseLeave={}
          >projects
          </button>

          <button className="nav-btn" id="bio"
            onClick={handleShowHideWindow}
          >bio</button>

          <button className="nav-btn" id="contact"
            onClick={handleShowHideWindow}
          >contact</button> */}

        </div>

      </div>
    </Fragment>
  );
}