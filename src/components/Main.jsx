import { useState, Fragment } from 'react';
// import { useSpring } from '@react-spring/web';
import classNames from 'classnames';

import './styles.scss';

import Home from './Home';
import Projects from './Projects/Projects';
import Bio from './Bio';
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
      if (clicks % 4 === 0 && clicks !== 0) {
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


  // const [modalSpringOpen, api1] = useSpring(() => ({
  //   from: { height: "0%" },
  //   config: { mass: 1.2, tension: 335, friction: 24 }
  // }), []);

  // const handleModalOpen = () => {
  //   api1.start({
  //     to: {
  //       height: !show ? "65%" : "0%",
  //     },
  //   });
  // };

  // const [modalSpringClose, api2] = useSpring(() => ({
  //   // ref: api,
  //   from: {height: "65%"},
  //   config: { tension: 365, friction: 23 }
  // }), []);

  // const handleModalClose = () => {
  //   api2.start({
  //     to: {
  //       height: "0%",
  //       // opacity: modalSprings.opacity.get() === 1 ? 0 : 1
  //     },
  //   });
  // };

  return (
    <Fragment>
      {view.page === "home" &&
        <Home
          handleShowHideWindow={handleShowHideWindow}
        />}
      <section className="modal-stain border"
        style={{ opacity: border }}
      ></section>
      <section className="modal-stain"
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
          // modalSpringOpen={modalSpringOpen}
          />}
        {view.page === "bio" &&
          <Bio
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition}
          />}
        {view.page === "contact" &&
          <Contact
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition}
          />}
      </div>
    </Fragment>
  );
}