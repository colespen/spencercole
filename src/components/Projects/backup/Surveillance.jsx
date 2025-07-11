import { useState, useEffect } from "react";

import "../modalstyles.scss";

import GitHubLink from "./GitHubLink";
import Carousel from "./Carousel";

export default function Surveillance() {
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
    href: "https://surveillance-camera-management-system.vercel.app",
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
          <a {...link}>Surveillance Management System</a>
        </h1>
      </header>
      <Carousel>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/SMS_1.jpg"
            alt="screenshot 1"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/SMS_2.jpg"
            alt="screenshot 3"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/SMS_3.jpg"
            alt="screenshot 4"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/SMS-mock1.png"
            alt="screensho t5"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/SMS-mock2.png"
            alt="screenshot 6"
          />
        </a>
      </Carousel>
      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>A fun challenge. . .</p>
        <br></br>
        <p>
          I built this application in under a week to simulate a network of
          surveillance cameras which alerts the user when motion or sound
          activity is detected. Alerts are written to a database for historical
          analysis.
        </p>
        <br></br>
        <br></br>
        <p style={{ paddingBottom: "10px" }}>
          <a className="its-live" {...link}>
            It's Live!
          </a>
        </p>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Next-Auth</li>
            <li>Primsa (ORM)</li>
            <li>PostgreSQL</li>
            <li>AWS S3 & CloudFront</li>
          </ul>
        </div>
      </main>
      <GitHubLink
        mainStyle={mainStyle}
        projectUrlName="Surveillance-Camera-Management-System"
      />
    </>
  );
}
