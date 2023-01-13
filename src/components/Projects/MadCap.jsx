import { Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';



export default function MadCap() {


  return (
    <Fragment>

      <header>
        <h1>Madcap</h1>
      </header>

      <Carousel>
      <img className="project-screenshot" src="./avatar-1.png" alt="project icon"
      style={{height: '200px', width: '101%'}}/>
      <img className="project-screenshot" src="./madcap1.png" alt="screenshot 1" />
      <img className="project-screenshot" src="./madcap2.png" alt="screenshot 2" />
      <img className="project-screenshot" src="./madcap3.png" alt="screenshot 3" />
      <img className="project-screenshot" src="./madcap4.png" alt="screenshot 4" />
      <img className="project-screenshot" src="./madcap5.png" alt="screenshot 5" />
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