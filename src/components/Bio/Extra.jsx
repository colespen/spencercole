import { Fragment } from 'react';

import '../modal.scss';


export default function Extra() {


  // const link = { 
  //   target: "_blank", rel: "noreferrer"
  // }


  return (
    <Fragment>
      <header className="tab-header"
        style={{ width: "100%" }}>
        <h1
        >Musical Projects <br></br>& Collaborations.</h1>
      </header>

      <main className="extra-description">
        <br></br>
        <h4>Solo Work</h4>
        <ul className="extra-list">
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
        <ul className="extra-list">
          <li><a href="">
            Weaves</a></li>
          <li><a href="">
            Pink Blob (Morgan Waters)</a></li>
          <li><a href="">
            Scrap Arts Music</a></li>
          <li><a href="">
            Our Founders</a></li>
        </ul>
        <br></br>
        <br></br>
        <p style={{ fontSize: "16px" }}>
          I have been found on stages all around the world peforming with great artists such as
          <br></br>
          Jeremy Dutcher, Carly Rae Jepsen, The Weather Station, The Toronto Sympony Orchestra, July Talk,
          <br></br>
          <br></br>
          and . . .
          <br></br>
          <br></br>
          sharing the stage with great artists such as
          <br></br>
          Mitski, Tuneyards and Marilyn Manson 
          <br></br>
          (to name a few).
        </p>
      </main>
    </Fragment>
  );
}