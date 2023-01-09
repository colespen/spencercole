import { useState } from 'react';
import classNames from 'classnames';

import ShowFinder from './ShowFinder';
import MadCap from './MadCap';

import './Projects.scss';


export default function Projects({ show, handleShowHideWindow }) {

  const windowShowHide = classNames(
    "window", {
    "display-block": !show,
    "display-none": show,
  });

  function useVisualMode(initial) {
    const [page, setPage] = useState(initial);

    const transition = nextmode => {
      if (nextmode) setPage(nextmode);
      else setPage(initial);
    };
    return { mode: page, transition };
  }

  const { mode, transition } = useVisualMode("P1")

  const handleProjectBtnClick = (e) => {
    transition(e.currentTarget.id);
  }


  return (
    <div className={windowShowHide}>
      <section className="window-main">
        <nav className="projects-nav">
          <button id="P1" onClick={handleProjectBtnClick}
          >project1</button>
          <button id="P2" onClick={handleProjectBtnClick}
          >project2</button>
          <button id="P3" onClick={handleProjectBtnClick}
          >project3</button>
          <button id="P4" onClick={handleProjectBtnClick}
          >project4</button>
        </nav>
        <button className="close-btn" onClick={handleShowHideWindow}>
          <img src="./close.png" alt="close-window" />
        </button>

        <div className="inner-window">
          { mode === "P1" && <ShowFinder />}
          { mode === "P2" && <MadCap />}
        </div>

      </section>
    </div>
  );
}