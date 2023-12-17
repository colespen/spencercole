import "./styles.scss";

import { useState, useEffect } from "react";

import Title from "./Title";
import Button from "./Button";


export default function Home(props) {
  const { handleShowHideWindow, isPointerEvent, handleClearDraw } = props;
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
      return () => clearTimeout(timer);
    }, 100);
  }, []);

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
        <Title handleClearDraw={handleClearDraw} />

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
