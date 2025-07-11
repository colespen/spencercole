export const projectsData = {
  saucerswap: {
    title: "SaucerSwap™",
    href: "https://www.saucerswap.finance/",
    images: [
      { src: "./images/saucerswap1.webp", alt: "screenshot 1" },
      { src: "./images/saucerswap2.jpg", alt: "screenshot 2" },
      { src: "./images/saucerswap3.jpg", alt: "screenshot 3" },
      { src: "./images/saucerswap4.jpg", alt: "screenshot 4" }
    ],
    description: [
      "SaucerSwap™ is a decentralized exchange built on the Hedera network.",
      "For this contract, I had the pleasure of working with a team of world-class developers to build version 2 of the UI for an advanced cryto trading platform. I am proud of the results and grateful for the opportunity."
    ],
    liveLink: "SaucerSwap™",
    stack: [
      "React",
      "React Query", 
      "Next.js",
      "Typescript",
      "MUI",
      "Hedera Network"
    ],
    githubProjectName: "ShowFinder"
  },

  showfinder: {
    title: "ShowFinder",
    href: "https://www.showfinder.ninja",
    images: [
      { src: "./images/globeicon.png", alt: "project icon", style: { height: "200px" } },
      { src: "./images/showfinder1.jpg", alt: "screenshot 1" },
      { src: "./images/showfinder2.jpg", alt: "screenshot 2" },
      { src: "./images/showfinder3.jpg", alt: "screenshot 3" },
      { src: "./images/showfinder4.jpg", alt: "screenshot 4" }
    ],
    description: [
      "The world needs a very simple, quick app to find shows.",
      "This app provides the user with shows mapped to date and location input in a convenient interface, including relative links to artists, venues, ticket information and audio previews."
    ],
    liveLink: "It's Live!",
    stack: [
      "React Leaflet",
      "React.js",
      "Express",
      "Node.js"
    ],
    apis: [
      "RadpidAPI",
      "LocationIQ",
      { text: "PredictHQ", style: { textDecoration: "line-through" } },
      { text: "Songkick", style: { textDecoration: "line-through" } },
      { text: "Zyla", style: { textDecoration: "line-through" } }
    ],
    apiListClass: "sub",
    githubProjectName: "ShowFinder"
  },

  brainer: {
    title: "BRAINER",
    href: "https://brainer-client.vercel.app",
    images: [
      { src: "./images/brainer1.png", alt: "project icon" },
      { src: "./images/brainer2.png", alt: "screenshot 1" },
      { src: "./images/brainer3.jpg", alt: "screenshot 2" }
    ],
    description: [
      "A simple memory game that will help people to improve their focus, retention of geometric configurations and visual memory recall.",
      "Inspiration drawn from an interview assessment challenge."
    ],
    liveLink: "Enjoy, it's Live!",
    stack: [
      "React",
      "Typescript",
      "Redux",
      "Express",
      "PostgreSQL"
    ],
    githubProjectName: "brainer"
  },

  voiceassistant: {
    title: "Voice Command Oscilloscope",
    href: "https://voice-command-oscilloscope.vercel.app",
    images: [
      { src: "./images/voiceassistant1.png", alt: "screenshot 1" },
      { src: "./images/voiceassistant2.png", alt: "screenshot 2" },
      { src: "./images/voiceassistant3.png", alt: "screenshot 3" }
    ],
    description: [
      "This little app offers a fun, engaging way to search Google.",
      <>
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
      </>
    ],
    liveLink: "It's Live!",
    stack: [
      {
        name: "React",
        subItems: ["TypeScript"]
      },
      "Canvas API",
      {
        name: "Web Speech API",
        subItems: ["Speech Recognition", "Speech Synthesis"]
      },
      "Web Audio API"
    ],
    githubProjectName: "voice-command-oscilloscope"
  },

  surveillance: {
    title: "Surveillance Management System",
    href: "https://surveillance-camera-management-system.vercel.app",
    images: [
      { src: "./images/SMS_1.jpg", alt: "screenshot 1" },
      { src: "./images/SMS_2.jpg", alt: "screenshot 2" },
      { src: "./images/SMS_3.jpg", alt: "screenshot 3" },
      { src: "./images/SMS-mock1.png", alt: "screenshot 4" },
      { src: "./images/SMS-mock2.png", alt: "screenshot 5" }
    ],
    description: [
      "A fun challenge. . .",
      "I built this application in under a week to simulate a network of surveillance cameras which alerts the user when motion or sound activity is detected. Alerts are written to a database for historical analysis."
    ],
    liveLink: "It's Live!",
    stack: [
      "Next.js",
      "TypeScript",
      "Next-Auth",
      "Primsa (ORM)",
      "PostgreSQL",
      "Vercel"
    ],
    githubProjectName: "surveillance-camera-management-system"
  },

  madcap: {
    title: "Madcap",
    href: "https://www.madcap.ninja/",
    images: [
      { src: "./images/avatar-1.png", alt: "project icon", style: { height: "200px", width: "101%" } },
      { src: "./images/madcap1.png", alt: "screenshot 1" },
      { src: "./images/madcap2.png", alt: "screenshot 2" },
      { src: "./images/madcap3.png", alt: "screenshot 3" },
      { src: "./images/madcap4.png", alt: "screenshot 4" },
      { src: "./images/madcap5.png", alt: "screenshot 5" }
    ],
    description: [
      "A fast-paced multiplayer word game where players race to capture letters for each chosen category.",
      "Built with Nicholas Kovacs and William Gadd"
    ],
    liveLink: "It's Live!",
    stack: [
      "Material UI",
      "React.js",
      "Socket.IO",
      "Express",
      "Node.js"
    ],
    githubProjectName: "madcap"
  },

  quizapp: {
    title: "QuizApp",
    href: "https://github.com/colespen/Quiz-App",
    images: [
      { src: "./images/quizapp1.jpg", alt: "screenshot 1" },
      { src: "./images/quizapp1a.png", alt: "screenshot 2" },
      { src: "./images/quizapp2.png", alt: "screenshot 3" },
      { src: "./images/quizapp3.png", alt: "screenshot 4" },
      { src: "./images/quizapp4.png", alt: "screenshot 5" },
      { src: "./images/quizapp5.png", alt: "screenshot 6" }
    ],
    description: [
      <>
        Here's another.
        <br />
        Explore, Create and Share customized games to challenge your friends.
      </>,
      <>
        It's the first team build I was ever invloved in
        <br />
        (with Nicholas Kovacs).
      </>,
      "I find working with other devs to be very motivating."
    ],
    stack: [
      "Bootstrap",
      "React.js",
      "Express",
      "Node.js",
      "PostgreSQL"
    ],
    githubProjectName: "Quiz-App"
  }
};
