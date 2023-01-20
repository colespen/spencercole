import { useState, useEffect, Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';



export default function MadCap() {

  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const link = {
    href: "https://www.madcap.ninja/", target: "_blank", rel: "noreferrer"
  };

  return (
    <Fragment>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1><a {...link}>Madcap</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot" src="./avatar-1.png" alt="project icon"
          style={{ height: '200px', width: '101%' }} /></a>
        <a {...link}><img className="project-screenshot" src="./madcap1.png" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot" src="./madcap2.png" alt="screenshot 2" /></a>
        <a {...link}><img className="project-screenshot" src="./madcap3.png" alt="screenshot 3" /></a>
        <a {...link}><img className="project-screenshot" src="./madcap4.png" alt="screenshot 4" /></a>
        <a {...link}><img className="project-screenshot" src="./madcap5.png" alt="screenshot 5" /></a>
      </Carousel>

      <main className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>A fast-paced multiplayer word game where players race to capture letters for each chosen category.</p>
        <p>Built with Nicholas Kovacs and William Gadd</p>
        <br></br>
        <p>Stack:</p>
        <p>the stack is this and this and this, Socket.IO</p>
        <p>Material-UI and custom SASS</p>
        <br></br>
        <p
          style={{ paddingBottom: "5px" }}
        >It's live. Give it a click!</p>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>Material UI</li>
            <li>React.js</li>
            <li>React Router</li>
            <li>Socket.IO</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

      </main>

      <a
        className="github-icon"
        style={{ ...mainStyle }}
        href="https://github.com/colespen/MadCap"
        target="_blank"
        rel="noreferrer"
      > <img src="./github-mark.svg" width="18" height="18" alt="GitHub-link"></img>
      </a>
    </Fragment>
  );
}