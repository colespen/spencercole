import { useState, useEffect, Fragment } from 'react';

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
    <Fragment>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 150ms ease-out" }}
      >
        <h1><a {...link}>Jungle</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot"
          src="./jungle1.png" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot"
          src="./jungle2.png" alt="screenshot 3" /></a>
        <a {...link}><img className="project-screenshot"
          src="./jungle3.png" alt="screenshot 4" /></a>
        <a {...link}><img className="project-screenshot"
          src="./jungle4.png" alt="screensho t5" /></a>
        <a {...link}><img className="project-screenshot"
          src="./jungle5.png" alt="screenshot 6" /></a>
      </Carousel>

      <main className="tab-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
        <p>this is another project</p>
        <br></br>
        <p>the stack is Ruby on Rails</p>
        <p>and this as well.</p>
        <br></br>
        <p>check it out herreeee.</p>
      </main>
    </Fragment>
  );
}