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

  const handleShowHideWindow = e => {
    // handleModalOpen();
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
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