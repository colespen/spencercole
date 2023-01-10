import { Fragment } from 'react';
import '../modal.scss';


export default function QuizApp() {


  return (
    <Fragment>

      <header>
        <h1>QuizApp</h1>
      </header>

      <main className="modal-description">
        <p>this is another project</p>
        <p>It's the first team project I was every invloced in</p>
        <br></br>
        <p>the stack is JS, Node.js Express</p>
        <p>custom CSS</p>
        <br></br>
        <p>check it out herreeee.</p>
      </main>
    </Fragment>
  );
}