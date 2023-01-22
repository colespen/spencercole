import { useState, useEffect, Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';


export default function ShowFinder() {

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
    href: "https://www.showfinder.ninja/", target: "_blank", rel: "noreferrer"
  };

  return (
    <Fragment>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1><a {...link}>ShowFinder</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot"
          style={{ height: '200px' }}
          src="./globeicon.png" alt="project icon" /></a>
        <a {...link}><img className="project-screenshot" src="./showfinder1.png" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot" src="./showfinder2.png" alt="screenshot 2" /></a>
        <a {...link}><img className="project-screenshot" src="./showfinder3.png" alt="screenshot 3" /></a>
      </Carousel>

      <main className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>The world needs a very simple, quick app to find shows.</p>
        <br></br>
        <p>This app provides the user with shows mapped to date and location input in a convenient interface, including relative links to artists, venues and ticket information</p>
        <br></br>
        <p style={{ paddingBottom: "5px" }}>
        <a 
          className="its-live" {...link}
        >It's Live!</a></p>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>React Leaflet</li>
            <li>React.js</li>
            <li>Express</li>
            <li>Node.js</li>
          </ul>
          <h5 style={{ paddingTop: "5px" }}>APIs:</h5>
          <ul className="project-stack-list sub">
            <li>RadpidAPI</li>
            <li>LocationIQ</li>
            <li style={{ textDecoration: "line-through" }}>PredictHQ</li>
            <li style={{ textDecoration: "line-through" }}>Songkick</li>
            <li style={{ textDecoration: "line-through" }}>Zyla</li>
          </ul>
        </div>
      </main>

      <a
        className="github-icon"
        style={{ ...mainStyle }}
        href="https://github.com/colespen/ShowFinder"
        target="_blank"
        rel="noreferrer"
      > <img src="./github-mark.svg" width="18" height="18" alt="GitHub-link"></img>
      </a>
    </Fragment>
  );
}