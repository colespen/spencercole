import { useState, useEffect } from "react";

import "../modalstyles.scss";

import GitHubLink from "./GitHubLink";
import Carousel from "./Carousel";

export default function SaucerSwap() {
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
    href: "https://www.saucerswap.finance/",
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
          <a {...link}>SaucerSwap&trade;</a>
        </h1>
      </header>
      <Carousel>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/saucerswap1.webp"
            alt="screenshot 1"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/saucerswap2.jpg"
            alt="screenshot 2"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/saucerswap3.jpg"
            alt="screenshot 3"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/saucerswap4.jpg"
            alt="screenshot 3"
          />
        </a>
      </Carousel>
      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>
          SaucerSwap&trade; is a decentralized exchange built on the Hedera
          network.
        </p>
        <br></br>
        <p>
          For this contract, I had the pleasure of working with a team of
          world-class developers to build version 2 of the UI for an advanced
          cryto trading platform. I am proud of the results and grateful for the
          opportunity.
        </p>
        <br></br>
        <p style={{ paddingBottom: "10px" }}>
          <a className="its-live" {...link}>
            SaucerSwap&trade;
          </a>
        </p>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>React</li>
            <li>React Query</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>MUI</li>
            <li>Hedera Network</li>
          </ul>
        </div>
      </main>
      <GitHubLink mainStyle={mainStyle} projectUrlName="ShowFinder" />
    </>
  );
}
