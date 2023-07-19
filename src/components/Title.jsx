import { useSpring, animated } from "@react-spring/web";

export default function Title({ handleClearDraw }) {

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

  return (
    <>
      <animated.h1
        className="title"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClearDraw}
        style={{
          transform: titleSpring.xys.to(perspective),
        }}
      >
        Spencer Cole
      </animated.h1>
    </>
  );
}
