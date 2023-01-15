import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

import ShowFinder from './ShowFinder';
import MadCap from './MadCap';
import QuizApp from './QuizApp';
import Jungle from './Jungle';
import Scheduler from './Scheduler';

import '../modal.scss';


export default function Projects(props) {
  const {
    handleShowHideWindow, view, transition,
  } = props;

  const [modalStyle, setModalStyle] = useState({
    opacity: 0,
  });
  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });
  const [navStyle, setNavStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavStyle({ opacity: 1 });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const springs = useSpring({
    from: { height: "0%" },
    to: { height: "65%" },
    config: { mass: 1.3, tension: 335, friction: 24 }
  });




  const handleProjectBtnClick = e => {
    transition("projects", e.currentTarget.id);
  };


  return (
    <animated.section className="modal-main"
      style={{ ...springs, ...modalStyle }}
    >
      <nav className="modal-nav"
        style={{ ...navStyle }}
      >
        <button id="P1" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./globeicon.png" alt="showfinder tab" />
        </button>
        <button id="P2" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./avatar-1.png" alt="madcap tab" />
        </button>
        <button id="P3" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./quizappicon.png" alt="quizapp tab"
            style={{ height: "28px", paddingTop: "1px" }} />
        </button>
        <button id="P4" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./jungleicon.png" alt="jungle tab"
            style={{ height: "33px", paddingBottom: "3px" }} />
        </button>
        <button id="P5" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./schedulericon.png" alt="scheduler tab" />
        </button>
      </nav>

      <button className="close-btn" onClick={handleShowHideWindow}>
        <img src="./close.png" alt="close-window" />
      </button>

      {!view.tab ?
        <animated.div className="home-inner-window"
        >
          <header
            style={{ ...mainStyle, transition: 'opacity 1.2s ease' }}
          >
            <h1>PROJECTS</h1>
          </header>

          <main className="main-description"
            style={{ ...mainStyle, transition: 'opacity 750ms ease-in' }}
          >
            <p>Here is a collection of some projects I have recently completed.</p>
            <br></br>
            <p>I love to focus on creating useful, fun applications.
              <br></br>
              I'm perpetually in search of a new challenges and enjoy discovering the latest tools available.</p>
            <br></br>
            <p>Please have a look through my work above...</p>
          </main>
        </animated.div>
        :
        <animated.div className="inner-window"
          // style={{ ...tabSprings }}
        >
          {view.tab === "P1" && <ShowFinder />}
          {view.tab === "P2" && <MadCap />}
          {view.tab === "P3" && <QuizApp />}
          {view.tab === "P4" && <Jungle />}
          {view.tab === "P5" && <Scheduler />}
        </animated.div>
      }
    </animated.section>
  );
}