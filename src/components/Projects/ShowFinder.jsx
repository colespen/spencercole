import { Fragment } from 'react';

import '../modal.scss';


export default function ShowFinder() {


  return (
    <Fragment>

      <header>
        <h1>ShowFinder</h1>
      </header>

      <img className="project-icon" src="./globeicon.png" alt="project icon"/>

      <main className="tab-description">
        <p>The world needs a very simple, quick app to find shows.</p>
        <br></br>
        <p>This app provides this convience with a simple interface, mapping all nearby shows, including links to artists, venues and ticket informnation</p>
        <br></br>
        <p>JS, React, Express
        <br></br>
          APIS: RadpidAPI, LocationIQ</p>
        <p>and this as well.</p>
        <br></br>
        <p>check it out here.</p>
      </main>
    </Fragment>
  );
}