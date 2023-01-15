import { Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';


export default function Jungle() {


  return (
    <Fragment>

      <header className="tab-header">
        <h1>Jungle</h1>
      </header>

      <Carousel>
        <img className="project-screenshot"
          src="./jungle1.png" alt="screenshot 1" />
        <img className="project-screenshot"
          src="./jungle2.png" alt="screenshot 3" />
        <img className="project-screenshot"
          src="./jungle3.png" alt="screenshot 4" />
        <img className="project-screenshot"
          src="./jungle4.png" alt="screensho t5" />
        <img className="project-screenshot"
          src="./jungle5.png" alt="screenshot 6" />
      </Carousel>

      <main className="tab-description">
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