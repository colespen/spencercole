import { Fragment } from 'react';
import '../modal.scss';


export default function ShowFinder() {


  return (
    <Fragment>

      <header>
        <h1>ShowFinder</h1>
      </header>

      <main className="modal-description">
        <p>The world needs a very simple, quick app to find shows.</p>
        <br></br>
        <p>This app provides this convience with a simple interface, mapping all nearby shows, including links to artists, venues and ticket informnation</p>
        <br></br>
        <p></p>
        <p>JS, React, Express
        <p></p>
          APIS: RadpidAPI, LocationIQ</p>
        <p>and this as well.</p>
        <br></br>
        <p>check it out here.</p>
      </main>
    </Fragment>
  );
}