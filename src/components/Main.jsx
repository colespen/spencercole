import { useState, Fragment } from 'react';
import classNames from 'classnames';

import './styles.scss';

import Home from './Home';
import Projects from './Projects/Projects';
import Bio from './Bio';
import Contact from './Contact';

import useVisualMode from '../hooks/useVisualMode';


export default function Main() {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleShowHideWindow = e => {
    !show ? setShow(true) : setShow(false);
    transition(e.currentTarget.id, "");
    
      setTimeout(() => {
        setOpacity(100)
      }, [])
    
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
        <Home handleShowHideWindow={handleShowHideWindow}
        />}
      <div className={windowShowHide}>
        {view.page === "projects" &&
          <Projects
            show={show}
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition}
            opacity={opacity}
          />}
        {view.page === "bio" &&
          <Bio
            show={show}
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition} 
            opacity={opacity}
            />}
        {view.page === "contact" &&
          <Contact
            show={show}
            handleShowHideWindow={handleShowHideWindow}
            view={view} transition={transition}
            opacity={opacity}
          />}
      </div>
    </Fragment>
  );
}