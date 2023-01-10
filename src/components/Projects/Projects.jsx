import ShowFinder from './ShowFinder';
import MadCap from './MadCap';
import QuizApp from './QuizApp';
import Jungle from './Jungle';
import Scheduler from './Scheduler';

import '../styles.scss'
import '../modal.scss';

import { Fragment } from 'react';



export default function Projects(props) {

  const { handleShowHideWindow, view, transition } = props;

  const handleProjectBtnClick = e => {
    transition("projects", e.currentTarget.id);
  };

  console.log(view);

  return (
    <section className="modal-main">
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

      <div className="inner-window">
        {!view.tab &&
          <Fragment>
            <header>
              <h1>PROJECTS</h1>
            </header>

            <main>
              <p>Here is a collection of some projects I have recently completed.</p>
              <br></br>
              <p>I love to focus on creating useful, fun applications. 
              <br></br>
                I'm perpetually in search of a new challenge and enjoy discovering the latest tools.</p>
              <br></br>
              <p>Please have a look through my work above...</p>
            </main>
          </Fragment>
        }
        {view.tab === "P1" && <ShowFinder />}
        {view.tab === "P2" && <MadCap />}
        {view.tab === "P3" && <QuizApp />}
        {view.tab === "P4" && <Jungle />}
        {view.tab === "P5" && <Scheduler />}
      </div>

    </section>
  );
}