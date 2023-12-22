import { useState, useEffect } from "react";

import "../modalstyles.scss";

import GitHubLink from "./GitHubLink";
import Carousel from "./Carousel";

export default function Brainer() {
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
    href: "https://brainer-client.vercel.app",
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
          <a {...link}>BRAINER</a>
        </h1>
      </header>
      <Carousel>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/brainer1.png"
            alt="project icon"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/brainer2.png"
            alt="screenshot 1"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/brainer3.jpg"
            alt="screenshot 2"
          />
        </a>
      </Carousel>
      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>
          A simple memory game that will help people to improve their focus,
          retention of geometric configurations and visual memory recall.
        </p>
        <br></br>
        <p>Inspiration drawn from an interview assessment challenge.</p>
        <br></br>
        <p style={{ paddingBottom: "10px" }}>
          <a className="its-live" {...link}>
            Enjoy, it's Live!
          </a>
        </p>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>React</li>
            <li>Typescript</li>
            <li>Redux</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </main>
      <GitHubLink mainStyle={mainStyle} projectUrlName="brainer" />
    </>
  );
}
