import { Fragment } from 'react';

import '../modal.scss';


export default function Extra() {


  // const link = { 
  //   target: "_blank", rel: "noreferrer"
  // }


  return (
    <Fragment>
      <header className="tab-header">
        {/* <h1><a {...link}>Passions</a></h1>
         */}
        <h1>Extra</h1>
      </header>

      <main className="tab-description">
        <h3>Musical Projects
          <br></br>& Collaborations.
        </h3>
        <h4>Solo Work</h4>
        <ul>
          <li><a href="">
            Bandcamp</a></li>
          <li><a href="">
            Spotify</a></li>
          <li><a href="">
            Apple Music</a></li>
          <li><a href="">
            etc...</a></li>
        </ul>
        <br></br>
        <h4>Collaborative</h4>
        <ul>
          <li><a href="">
            Weaves</a></li>
          <li><a href="">
            Pink Blob (Morgan Waters)</a></li>
          <li><a href="">
            Our Founder</a></li>
        </ul>

        <p>
          I have been found on stages all around the world peforming with great artists such as
          <br></br>
          Jeremy Dutcher, The Weather Station, the Toronto Sympony Orchestra, July Talk and Weaves...
          <br></br>
          sharing the stage with great artists such as
          <br></br>
          Mitski, Tuneyards, Marilyn Manson and
        </p>
      </main>
    </Fragment>
  );
}