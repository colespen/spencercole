import { useState, useEffect } from 'react';

import '../modal.scss';

import Carousel from './Carousel';

export default function Jungle() {

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
    href: "https://github.com/colespen/Jungle", target: "_blank", rel: "noreferrer"
  };

  return (
    <>
      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1><a {...link}>Jungle</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot"
          src="./images/jungle1.jpg" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot"
          src="./images/jungle2.jpg" alt="screenshot 3" /></a>
        <a {...link}><img className="project-screenshot"
          src="./images/jungle3.png" alt="screenshot 4" /></a>
        <a {...link}><img className="project-screenshot"
          src="./images/jungle4.png" alt="screensho t5" /></a>
        <a {...link}><img className="project-screenshot"
          src="./images/jungle5.png" alt="screenshot 6" /></a>
      </Carousel>

      <main className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>And another. . .</p>
        <br></br>
        <p>
          This was my first Ruby on Rails project. I got the hang of the language in under a week and proved to be very efficient.
        </p>
        <br></br>
        <p>Includes secure admin login to manage products.</p>
        <br></br>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>Bootstrap</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>Stripe</li>
          </ul>
        </div>
      </main>

      <a
        className="github-icon"
        style={{ ...mainStyle }}
        href="https://github.com/colespen/Jungle"
        target="_blank"
        rel="noreferrer"
      > <img src="./images/github-mark.svg" width="18" height="18" alt="GitHub-link"></img>
      </a>
    </>
  );
}