import { useState, Fragment } from 'react';
import classNames from 'classnames';

import './styles.scss';

import Home from './Home';
import Projects from './Projects/Projects';
import Bio from './Bio/Bio';
import Contact from './Contact';

import useVisualMode from '../hooks/useVisualMode';



export default function Main() {

  const [show, setShow] = useState(false);

  //// For Modal Stain Transition
  const [flash, setFlash] = useState(0);
  const [border, setBorder] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleShowHideWindow = e => {
    setClicks(prev => prev + 1);
    if (!show) {
      setShow(true);
      setBorder(1);
      if (clicks % 8 === 0 && clicks !== 0) {
        setFlash(1);
      }
    } else {
      setShow(false);
      setBorder(0);
      setFlash(0);
    }
    transition(e.currentTarget.id, "");
  };

  const { view, transition } = useVisualMode("home", "");

  const windowShowHide = classNames(
    "window", {
    "display-block": show,
    "display-none": !show,
  });

  return (
    <Fragment>
      {view.page === "home" &&
        <Home
          handleShowHideWindow={handleShowHideWindow}
        />}

      <section className="modal-stain light-border"
        style={{ opacity: border }}
      ></section>
      <section className="modal-stain heavy-border"
        style={{ opacity: flash }}
      ></section>
      <section className="modal-stain flash"
        style={{ opacity: flash }}
      ></section>

      <div className={windowShowHide}>
        {view.page === "projects" &&
          <Projects
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition}
          />}
        {view.page === "bio" &&
          <Bio
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition}
          />}
        {view.page === "contact" &&
          <Contact
            handleShowHideWindow={handleShowHideWindow}
            // view={view} transition={transition}
          />}
      </div>
    </Fragment>
  );
}