import { Fragment } from 'react';

import '../modal.scss';


export default function MadCap() {


  return (
    <Fragment>

      <header>
        <h1>Madcap</h1>
      </header>

      <img className="project-icon" src="./avatar-1.png" 
      style={{height: '172px'}}/>

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