import classNames from 'classnames';

import ShowFinder from './ShowFinder';
import MadCap from './MadCap';
import QuizApp from './QuizApp';
import Jungle from './Jungle';
import Scheduler from './Scheduler';

import './Projects.scss';

import useVisualMode from '../../hooks/useVisualMode';


export default function Projects({ show, handleShowHideWindow }) {

  const windowShowHide = classNames(
    "window", {
    "display-block": !show,
    "display-none": show,
  });



  const { mode, transition } = useVisualMode("P1")

  const handleProjectBtnClick = (e) => {
    transition(e.currentTarget.id);
  }


  return (
    <div className={windowShowHide}>
      <section className="window-main">
        <nav className="projects-nav">
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

        <div className="inner-window">
          { mode === "P1" && <ShowFinder />}
          { mode === "P2" && <MadCap />}
          { mode === "P3" && <QuizApp />}
          { mode === "P4" && <Jungle />}
          { mode === "P5" && <Scheduler />}
        </div>

      </section>
    </div>
  );
}