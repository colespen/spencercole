import { Fragment } from 'react';

import '../modal.scss';

import Carousel from './Carousel';


export default function ShowFinder() {



  const link = {
    href: "https://www.showfinder.ninja/", target: "_blank", rel: "noreferrer"
  };

  return (
    <Fragment>

      <header className="tab-header">
        <h1><a {...link}>ShowFinder</a></h1>
      </header>

      <Carousel>
        <a {...link}><img className="project-screenshot"
          style={{ height: '200px' }}
          src="./globeicon.png" alt="project icon" /></a>
        <a {...link}><img className="project-screenshot" src="./showfinder1.png" alt="screenshot 1" /></a>
        <a {...link}><img className="project-screenshot" src="./showfinder2.png" alt="screenshot 2" /></a>
        <a {...link}><img className="project-screenshot" src="./showfinder3.png" alt="screenshot 3" /></a>
      </Carousel>

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