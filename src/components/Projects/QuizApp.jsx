import { Fragment } from 'react';

import '../modal.scss';


export default function QuizApp() {


  return (
    <Fragment>

      <header>
        <h1>QuizApp</h1>
      </header>

      <img className="project-icon" src="./quizapp1.png" 
      style={{borderRadius: '30px', height: '320px'}}/>

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