import { useEffect, useRef, useState, Fragment } from 'react';

import './styles.scss';


export default function Drawing(props) {
  const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const startDraw = ({ nativeEvent }) => {
    props.setIsPointerEvent("none");
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const stopDraw = () => {
    props.setIsPointerEvent("auto");
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
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
    const canvas = canvasRef.current;
    // to supports higher screen densities, double screen density
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // setting the context to enable draw
    const ctx = canvas.getContext('2d');
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
        // style={{
        //   display: 'block',
        //   margin: '0',
        //   position: 'fixed',
        //   inset: '0',
        // }}
        onMouseDown={startDraw}
        onMouseUp={stopDraw}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </Fragment>
  );
}