import { useState, useEffect } from "react";
import classNames from "classnames";

import "./styles.scss";

import Home from "./Home";
import Projects from "./Projects/Projects";
import Bio from "./Bio/Bio";
import Contact from "./Contact/Contact";
import Draw from "./Draw";
import ModalStain from "./ModalStain";

import useVisualMode from "../hooks/useVisualMode";

export default function Main() {
  const [show, setShow] = useState(false);
  const [isPointerEvent, setIsPointerEvent] = useState("auto");
  const [isDrawClear, setIsDrawClear] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [isSpringRest, setIsSpringRest] = useState(false);
  //// For Modal Stain Transition
  const [isStainVisible, setIsStainVisible] = useState("visible");
  const [border, setBorder] = useState(0);
  const [flash, setFlash] = useState(0);

  const { view, transition } = useVisualMode("home", null);

  const windowShowHide = classNames("window", {
    "display-block": show,
    "display-none": !show,
  });

  const handleShowHideWindow = (e) => {
    setClicks((prev) => prev + 1);
    if (!show) {
      setShow(true);
      clicks % 4 === 0 && clicks !== 0 ? setFlash(1) : setBorder(1);
    } else {
      setShow(false);
      setBorder(0);
      setFlash(0);
    }
    transition(e ? e.currentTarget.id : null, null);
  };

  const handleClearDraw = () => {
    !isDrawClear ? setIsDrawClear(true) : setIsDrawClear(false);
  };

  const handleOnMouseEnter = () => {
    if (isSpringRest && isStainVisible === "hidden") {
      setIsStainVisible("visible");
    }
  };

  useEffect(() => {
    view.page !== "home"
      ? setIsStainVisible("hidden")
      : setIsStainVisible("visible");
  }, [view.page]);

  return (
    <>
      <Draw setIsPointerEvent={setIsPointerEvent} isDrawClear={isDrawClear} />

      {view.page === "home" && (
        <Home
          handleShowHideWindow={handleShowHideWindow}
          isPointerEvent={isPointerEvent}
          handleClearDraw={handleClearDraw}
        />
      )}
      <ModalStain
        border={border}
        flash={flash}
        isStainVisible={isStainVisible}
      />

      <div className={windowShowHide}>
        {view.page === "projects" && (
          <Projects
            handleShowHideWindow={handleShowHideWindow}
            handleOnMouseEnter={handleOnMouseEnter}
            setIsSpringRest={setIsSpringRest}
            transition={transition}
            view={view}
            show={show}
          />
        )}
        {view.page === "bio" && (
          <Bio
            handleShowHideWindow={handleShowHideWindow}
            handleOnMouseEnter={handleOnMouseEnter}
            setIsSpringRest={setIsSpringRest}
            transition={transition}
            view={view}
            show={show}
          />
        )}
        {view.page === "contact" && (
          <Contact
            handleShowHideWindow={handleShowHideWindow}
            handleOnMouseEnter={handleOnMouseEnter}
            setIsSpringRest={setIsSpringRest}
            show={show}
          />
        )}
      </div>
    </>
  );
}
