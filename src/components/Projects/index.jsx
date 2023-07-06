import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import ModalTabs from "./ModalTabs";
import ShowFinder from "./ShowFinder";
import VoiceAssistant from "./VoiceAssistant";
import Surveillance from "./Surveillance";
import MadCap from "./MadCap";
import QuizApp from "./QuizApp";
import Scheduler from "./Scheduler";
import GitHubLink from "./GitHubLink";

import "../modalstyles.scss";

export default function Projects(props) {
  const {
    handleShowHideWindow,
    view,
    transition,
    handleOnMouseEnter,
    setIsSpringRest,
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

  const handleProjectBtnClick = (e) => {
    transition("projects", e.currentTarget.id);
  };

  return (
    <animated.section
      className="modal-main"
      style={{ ...springs, ...modalStyle }}
    >
      <ModalTabs
        handleProjectBtnClick={handleProjectBtnClick}
        navStyle={navStyle}
      />

      <button
        className="close-btn"
        onClick={handleShowHideWindow}
        onMouseEnter={handleOnMouseEnter}
      >
        <img src="./images/close.png" alt="close-window" />
      </button>

      {!view.tab ? (
        <animated.div className="home-inner-window">
          <header style={{ ...mainStyle, transition: "opacity 2.2s ease" }}>
            <h1>PROJECTS</h1>
          </header>

          <main
            className="main-description"
            style={{ ...mainStyle, transition: "opacity 750ms ease-in" }}
          >
            <p>
              Here is a collection of some projects I have recently completed.
            </p>
            <br></br>
            <p>
              I love to focus on creating useful, fun applications.
              <br></br>I am perpetually in search of a new challenge and enjoy
              discovering the latest tools available.
            </p>
            <br></br>
            <p>Please have a look through my work above...</p>
          </main>

          <GitHubLink mainStyle={mainStyle} projectUrlName="" />
        </animated.div>
      ) : (
        <animated.div className="inner-window">
          {view.tab === "P1" && <ShowFinder />}
          {view.tab === "P2" && <VoiceAssistant />}
          {view.tab === "P3" && <Surveillance />}
          {view.tab === "P4" && <MadCap />}
          {view.tab === "P5" && <QuizApp />}
          {view.tab === "P6" && <Scheduler />}
        </animated.div>
      )}
    </animated.section>
  );
}
