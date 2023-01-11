import { animated, useSpring } from '@react-spring/web';

import ShowFinder from './ShowFinder';
import MadCap from './MadCap';
import QuizApp from './QuizApp';
import Jungle from './Jungle';
import Scheduler from './Scheduler';

import '../modal.scss';



export default function Projects(props) {

  const { handleShowHideWindow, view, transition } = props;

  const handleProjectBtnClick = e => {
    transition("projects", e.currentTarget.id);
  };

  const springs = useSpring({
    from: { height: "0%", width: "0%" },
    to: { height: "65%", width: "75%" }
  });


  return (
    <animated.section className="modal-main"
    style={{...springs}}
    >
      <nav className="modal-nav">
        <button id="P1" onClick={handleProjectBtnClick}
        >ShowFinder</button>
        <button id="P2" onClick={handleProjectBtnClick}
        >MadCap</button>
        <button id="P3" onClick={handleProjectBtnClick}
        >QuizApp</button>
        <button id="P4" onClick={handleProjectBtnClick}
        >Jungle</button>
        <button id="P5" onClick={handleProjectBtnClick}
        >Scheduler</button>
      </nav>
      <button className="close-btn" onClick={handleShowHideWindow}>
        <img src="./close.png" alt="close-window" />
      </button>

      {!view.tab ?
        <div className="home-inner-window" style={{...props.opacity}}>
          <header>
            <h1>PROJECTS</h1>
          </header>

          <main className="main-description">
            <p>Here is a collection of some projects I have recently completed.</p>
            <br></br>
            <p>I love to focus on creating useful, fun applications.
              <br></br>
              I'm perpetually in search of a new challenges and enjoy discovering the latest tools available.</p>
            <br></br>
            <p>Please have a look through my work above...</p>
          </main>
        </div>
        :
        <div className="inner-window">
          {view.tab === "P1" && <ShowFinder />}
          {view.tab === "P2" && <MadCap />}
          {view.tab === "P3" && <QuizApp />}
          {view.tab === "P4" && <Jungle />}
          {view.tab === "P5" && <Scheduler />}
        </div>
      }
    </animated.section>
  );
}