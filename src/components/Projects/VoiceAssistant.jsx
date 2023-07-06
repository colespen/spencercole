import { useState, useEffect } from "react";

import "../modal.scss";

import Carousel from "./Carousel";

export default function VoiceAssistant() {
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
    href: "https://voice-command-oscilloscope.vercel.app/",
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
          <a {...link}>Voice Command Oscilloscope</a>
        </h1>
      </header>

      <Carousel>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/voiceassistant1.png"
            alt="screenshot 1"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/voiceassistant2.png"
            alt="screenshot 2"
          />
        </a>
        <a {...link}>
          <img
            className="project-screenshot"
            src="./images/voiceassistant3.png"
            alt="screenshot 3"
          />
        </a>
      </Carousel>

      <main
        className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>This little app offers a fun, engaging way to search Google.</p>
        <br></br>
        <p>
          I've created a voice assistant and audio visualizer to guide the user
          to their search query in a hands-free, interactive environment.
          <br />
          Canvas draws a representation of the user's audio input in the style
          of an
          <a
            href="https://en.wikipedia.org/wiki/Oscilloscope#/media/File:Tektronix_Oscilloscope_475A.jpg"
            target="blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "lightgreen" }}
          >
            {" "}
            oscilloscope{" "}
          </a>
          while speech recognition matches the results for a search query.
        </p>
        <br></br>
        <p style={{ paddingBottom: "10px" }}>
          <a className="its-live" {...link}>
            It's Live!
          </a>
        </p>

        <div style={{ fontSize: "85%", paddingTop: "5px" }}>
          <h4>Stack:</h4>
          <ul className="project-stack-list">
            <li>React</li>
            <ul>
              <li>TypeScript</li>
            </ul>
            <li>Canvas API</li>
            <li>Web Speech API</li>
            <ul>
              <li>Speech Recognition</li>
              <li>Speech Synthesis</li>
            </ul>
            <li>Socket.IO</li>
            <li>Express</li>
            <li>Node.js</li>
          </ul>
        </div>
      </main>

      <a
        className="github-icon"
        style={{ ...mainStyle }}
        href="https://github.com/colespen/voice-command-oscilloscope"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./images/github-mark.svg"
          width="18"
          height="18"
          alt="GitHub-link"
        ></img>
      </a>
    </>
  );
}
