import { Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';

export default function QuizApp() {


  return (
    <Fragment>

      <header>
        <h1>QuizApp</h1>
      </header>

      <Carousel>
        <img className="project-screenshot" 
        src="./quizapp1.png" alt="screenshot 1"/>
        <img className="project-screenshot" 
        src="./quizapp1a.png" alt="screenshot 2"/>
        <img className="project-screenshot" 
        src="./quizapp2.png" alt="screenshot 3"/>
        <img className="project-screenshot" 
        src="./quizapp3.png" alt="screenshot 4"/>
        <img className="project-screenshot" 
        src="./quizapp4.png" alt="screensho t5"/>
        <img className="project-screenshot" 
        src="./quizapp5.png" alt="screenshot 6"/>
      </Carousel>

      <main className="tab-description">
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