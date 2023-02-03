import { useEffect, useRef, useState, Fragment } from 'react';

import './styles.scss';


export default function Drawing(props) {
  const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  ////// get position for touch events
  function getMousePosOnCanvas(event) {
    const { offsetLeft, offsetTop } = event.target;

    if (event.type === "mousedown" || event.type === "mousemove") {
      const clientMouseX = event.clientX;
      const clientMouseY = event.clientY;
      const canvasMouseX = clientMouseX - offsetLeft;
      const canvasMouseY = clientMouseY - offsetTop;
      return { x: canvasMouseX, y: canvasMouseY };
    }
    if (event.type === "touchstart" || event.type === "touchmove") {
      const clientTouchX = event.touches[0].clientX;
      const clientTouchY = event.touches[0].clientY;
      const canvasTouchX = clientTouchX - offsetLeft;
      const canvasTouchY = clientTouchY - offsetTop;
      return { x: canvasTouchX, y: canvasTouchY };
    }

  }

  const startDraw = ({ nativeEvent }) => {
    props.setIsPointerEvent("none");

    const mousePos = getMousePosOnCanvas(nativeEvent); 

    // const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(mousePos.x, mousePos.y);

    ctxRef.current.fill(); // ******

    setDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) return;
    // const { offsetX, offsetY } = nativeEvent;
    const mousePos = getMousePosOnCanvas(nativeEvent); // ******
    ctxRef.current.lineTo(mousePos.x, mousePos.y);
    ctxRef.current.stroke();
  };

  const stopDraw = () => {
    props.setIsPointerEvent("auto");
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const clear = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current; // *****
    // to supports higher screen densities, double screen density
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // setting the context to enable draw
    const ctx = canvas.getContext('2d'); // *****
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = "round";
    ctx.strokeStyle = 'midnightblue';
    ctx.lineWidth = 80;
    ctx.imageSmoothingEnabled = true;
    ctxRef.current = ctx;

    if (props.isDrawClear) clear();
  }, [props.isDrawClear]);




  return (
    <Fragment>
      <canvas
        id="draw-canvas"
        ref={canvasRef}
        onMouseDown={startDraw}
        onMouseUp={stopDraw}
        onMouseMove={draw}
        onTouchStart={startDraw}
        onTouchEnd={stopDraw}
        onTouchMove={draw}
      />
    </Fragment>
  );
}