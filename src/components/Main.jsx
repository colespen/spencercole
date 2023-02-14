import { useState, useEffect } from 'react';
import classNames from 'classnames';

import './styles.scss';

import Home from './Home';
import Projects from './Projects/Projects';
import Bio from './Bio/Bio';
import Contact from './Contact';
import Draw from './Draw';

import useVisualMode from '../hooks/useVisualMode';

export default function Main() {

  const [show, setShow] = useState(false);

  const [isPointerEvent, setIsPointerEvent] = useState("auto");
  const [isDrawClear, setIsDrawClear] = useState(false);

  //// For Modal Stain Transition
  const [isStainVisible, setIsStainVisible] = useState("visible");
  const [isSpringRest, setIsSpringRest] = useState(false);
  const [flash, setFlash] = useState(0);
  const [border, setBorder] = useState(0);
  const [clicks, setClicks] = useState(0);

  const { view, transition } = useVisualMode("home", null);

  const windowShowHide = classNames(
    "window", {
    "display-block": show,
    "display-none": !show,
  });

  const handleShowHideWindow = e => {
    setClicks(prev => prev + 1);
    if (!show) {
      setShow(true);
      (clicks % 4 === 0 && clicks !== 0) ?
        setFlash(1) : setBorder(1);
    } else {
      setShow(false);
      setBorder(0);
      setFlash(0);
    }
    transition(e.currentTarget.id, null);
  };

  const handleClearDraw = () => {
    !isDrawClear ? setIsDrawClear(true) : setIsDrawClear(false);
  };

  useEffect(() => {
    view.page !== "home" ?
      setIsStainVisible("hidden") : setIsStainVisible("visible");
  }, [view.page]);

  const handleOnMouseEnter = () => {
    if (isSpringRest && isStainVisible === "hidden") {
      setIsStainVisible("visible");
    };
  };


  return (
    <>
      <Draw
        setIsPointerEvent={setIsPointerEvent}
        isDrawClear={isDrawClear}
      />

      {view.page === "home" &&
        <Home
          handleShowHideWindow={handleShowHideWindow}
          isPointerEvent={isPointerEvent}
          handleClearDraw={handleClearDraw}
        />}

      <section className="modal-stain light-border"
        style={{ opacity: border, visibility: isStainVisible }}
      ></section>
      <section className="modal-stain heavy-border"
        style={{ opacity: flash, visibility: isStainVisible }}
      ></section>
      <section className="modal-stain flash"
        style={{ opacity: flash, visibility: isStainVisible }}
      ></section>

      <div className={windowShowHide}>
        {view.page === "projects" &&
          <Projects
            handleShowHideWindow={handleShowHideWindow}
            handleOnMouseEnter={handleOnMouseEnter}
            setIsSpringRest={setIsSpringRest}
            view={view} transition={transition}
          />}
        {view.page === "bio" &&
          <Bio
            handleShowHideWindow={handleShowHideWindow}
            handleOnMouseEnter={handleOnMouseEnter}
            setIsSpringRest={setIsSpringRest}
            view={view} transition={transition}
          />}
        {view.page === "contact" &&
          <Contact
            handleShowHideWindow={handleShowHideWindow}
            handleOnMouseEnter={handleOnMouseEnter}
            setIsSpringRest={setIsSpringRest}
          />}
      </div>
    </>
  );
}