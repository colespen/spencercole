import { Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';



export default function MadCap() {

  const link = { 
    href: "https://www.madcap.ninja/", target: "_blank", rel: "noreferrer"
  }

  return (
    <Fragment>

      <header className="tab-header">
        <h1><a {...link}>Madcap</a></h1>
      </header>

      <Carousel>
      <a {...link}><img className="project-screenshot" src="./avatar-1.png" alt="project icon"
      style={{height: '200px', width: '101%'}}/></a>
      <a {...link}><img className="project-screenshot" src="./madcap1.png" alt="screenshot 1" /></a>
      <a {...link}><img className="project-screenshot" src="./madcap2.png" alt="screenshot 2" /></a>
      <a {...link}><img className="project-screenshot" src="./madcap3.png" alt="screenshot 3" /></a>
      <a {...link}><img className="project-screenshot" src="./madcap4.png" alt="screenshot 4" /></a>
      <a {...link}><img className="project-screenshot" src="./madcap5.png" alt="screenshot 5" /></a>
      </Carousel>

      <main className="tab-description">
        <p>this is another project</p>
        <br></br>
        <p>the stack is this and this and this, Socket.IO</p>
        <p>Material-UI and custom SASS</p>
        <br></br>
        <p>check it out herreeee.</p>
      </main>
    </Fragment>
  );
}