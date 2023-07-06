import { useState, useEffect } from "react";

import "../modalstyles.scss";

import Carousel from "./Carousel";
import GitHubLink from "./GitHubLink";

export default function QuizApp() {
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
    href: "https://github.com/colespen/Quiz-App",
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
          <a {...link}>QuizApp</a>
        </h1>
      </header>

      <Carousel>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/quizapp1.jpg"
            alt="screenshot 1"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/quizapp1a.png"
            alt="screenshot 2"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/quizapp2.png"
            alt="screenshot 3"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/quizapp3.png"
            alt="screenshot 4"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/quizapp4.png"
            alt="screensho t5"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/quizapp5.png"
            alt="screenshot 6"
          />
        </a>
      </Carousel>

      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>
          Here's another.
          <br></br>
          Explore, Create and Share customized games to challenge your friends.
        </p>
        <p>
          It's the first team build I was ever invloved in
          <br></br>(with Nicholas Kovacs).
        </p>
        <br></br>
        <p>I find working with other devs to be very motivating.</p>
        <br></br>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </main>
      <GitHubLink mainStyle={mainStyle} projectUrlName="Quiz-App" />
    </>
  );
}
