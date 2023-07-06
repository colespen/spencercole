import { useState, useEffect } from "react";

import "../modal.scss";

import Carousel from "./Carousel";
import GitHubLink from "./GitHubLink";

export default function Scheduler() {
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
    href: "https://github.com/colespen/scheduler",
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <>
      <header
        className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1>
          <a {...link}>Scheduler</a>
        </h1>
      </header>

      <Carousel>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/scheduler1.png"
            alt="screenshot 1"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/scheduler2.png"
            alt="screenshot 3"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/scheduler3.png"
            alt="screenshot 4"
          />
        </a>
      </Carousel>

      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>
          And finally, Scheduler. My first taste for React, and I loved it.
          <br></br>I also experimented with WebSockets for the first time and
          learned how to work with reducers.
        </p>
        <br></br>
        <p>Includes an admin dashboard app.</p>
        <br></br>
        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>React.js</li>
            <li>ws</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </main>
      <GitHubLink mainStyle={mainStyle} projectUrlName="scheduler" />
    </>
  );
}
