import { Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';


export default function Scheduler() {

  const link = { 
    href: "https://github.com/colespen/scheduler", target: "_blank", rel: "noreferrer"
  }

  return (
    <Fragment>

      <header className="tab-header">
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

      <main className="tab-description">
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