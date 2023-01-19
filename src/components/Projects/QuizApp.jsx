import { useState, useEffect, Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';



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
    href: "https://github.com/colespen/Quiz-App", target: "_blank", rel: "noreferrer"
  };

  return (
    <Fragment>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1><a {...link}>QuizApp</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot"
          src="./quizapp1.png" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot"
          src="./quizapp1a.png" alt="screenshot 2" /></a>
        <a {...link}><img className="project-screenshot"
          src="./quizapp2.png" alt="screenshot 3" /></a>
        <a {...link}><img className="project-screenshot"
          src="./quizapp3.png" alt="screenshot 4" /></a>
        <a {...link}><img className="project-screenshot"
          src="./quizapp4.png" alt="screensho t5" /></a>
        <a {...link}><img className="project-screenshot"
          src="./quizapp5.png" alt="screenshot 6" /></a>
      </Carousel>

      <main className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>this is another project</p>
        <p>It's the first team project I was ever invloved in.
          <br></br>
          working with other devs is very motivating.
        </p>
        <br></br>
        <p>the stack is JS, Node.js Express</p>
        <p>custom CSS</p>
        <br></br>
        <p>check it out herreeee.</p>
      </main>
    </Fragment>
  );
}