import { useState, useEffect, Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';


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
    href: "https://github.com/colespen/scheduler", target: "_blank", rel: "noreferrer"
  };

  return (
    <Fragment>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1><a {...link}>Scheduler</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot"
          src="./scheduler1.png" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot"
          src="./scheduler2.png" alt="screenshot 3" /></a>
        <a {...link}><img className="project-screenshot"
          src="./scheduler3.png" alt="screenshot 4" /></a>
      </Carousel>

      <main className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>this is another project</p>
        <br></br>
        <p>React.js, Node.js, Express and WebSockets ('ws')</p>
        <p>Bootstrap</p>
        <br></br>
        <p>check it out herreeee.</p>
      </main>
    </Fragment>
  );
}