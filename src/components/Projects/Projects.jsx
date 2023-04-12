import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

import ShowFinder from './ShowFinder';
import MadCap from './MadCap';
import QuizApp from './QuizApp';
import Jungle from './Jungle';
import Scheduler from './Scheduler';
import VoiceAssistant from './VoiceAssistant';

import '../modal.scss';


export default function Projects(props) {
  const {
    handleShowHideWindow, view, transition,
    handleOnMouseEnter, setIsSpringRest
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
    to: { height: "75%" },
    config: { mass: 1.3, tension: 335, friction: 24 },
    onStart: () => setIsSpringRest(false),
    onRest: () => setIsSpringRest(true),
  });

  const handleProjectBtnClick = e => {
    transition("projects", e.currentTarget.id);
  };



  return (
    <animated.section
      className="modal-main"
      style={{ ...springs, ...modalStyle }}
    >
      <nav className="modal-nav"
        style={{ ...navStyle }}
      >
        <button id="P1" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./images/globeicon.png" alt="showfinder tab" />
        </button>
        <button id="P2" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./images/voiceassistanticon.png" alt="scheduler tab" />
        </button>
        <button id="P3" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./images/avatar-1.png" alt="madcap tab" />
        </button>
        <button id="P4" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./images/quizappicon.png" alt="quizapp tab"
            style={{ height: "28px", paddingTop: "1px" }} />
        </button>
        <button id="P5" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./images/jungleicon.png" alt="jungle tab"
            style={{ height: "33px", paddingBottom: "3px" }} />
        </button>
        <button id="P6" onClick={handleProjectBtnClick}>
          <img className="tab-icon" src="./images/schedulericon.png" alt="scheduler tab" />
        </button>
       
      </nav>

      <button
        className="close-btn"
        onClick={handleShowHideWindow}
        onMouseEnter={handleOnMouseEnter}
      >
        <img src="./images/close.png" alt="close-window" />
      </button>

      {!view.tab ?

        <animated.div className="home-inner-window"
        >
          <header
            style={{ ...mainStyle, transition: 'opacity 2.2s ease' }}
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
              I am perpetually in search of a new challenge and enjoy discovering the latest tools available.</p>
            <br></br>
            <p>Please have a look through my work above...</p>
          </main>

          <a
            className="github-icon"
            style={{ ...navStyle }}
            href="https://github.com/colespen/"
            target="_blank"
            rel="noreferrer"
          > <img src="./images/github-mark.svg" width="18" height="18" alt="GitHub-link"></img>
          </a>
        </animated.div>

        :

        <animated.div className="inner-window">
          {view.tab === "P1" && <ShowFinder />}
          {view.tab === "P2" && <VoiceAssistant />}
          {view.tab === "P3" && <MadCap />}
          {view.tab === "P4" && <QuizApp />}
          {view.tab === "P5" && <Jungle />}
          {view.tab === "P6" && <Scheduler />}
        </animated.div>
      }

    </animated.section>
  );
}