import { useState, useEffect, Fragment } from 'react';

import './Bio.scss';
import '../modal.scss';


export default function Music() {

  const [firstStyle, setFirstStyle] = useState({
    opacity: 0,
  });
  const [secondStyle, setSecondStyle] = useState({
    opacity: 0,
  });
  const [subStyle, setSubStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondStyle({ opacity: 1 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubStyle({ opacity: 1 });
    }, 1900);
    return () => clearTimeout(timer);
  }, []);


  const link = {
    target: "_blank", rel: "noreferrer"
  };


  return (
    <Fragment>
      <main className="main-description music">
        <h3 style={{ ...firstStyle, transition: "opacity 400ms ease-out", paddingBottom: "10px" }}>Solo Projects</h3>
        <ul className="extra-list"
          style={{ ...firstStyle, transition: "opacity 1200ms ease", paddingBottom: "10px" }}
        >
          <li><a href="https://spencercole.bandcamp.com/" {...link}>
            Bandcamp</a></li>
          <li><a href="https://open.spotify.com/artist/5CeHgBIzA6ix6H1EZ7Rl67" {...link}>
            Spotify</a></li>
          <li><a href="https://music.apple.com/ca/artist/spencer-cole/782422551" {...link}>
            Apple Music</a></li>
          <li><a href="https://hyperfollow.com/spencercole" {...link}>
            etc...</a></li>
        </ul>
        <br></br>
        <h3 style={{ ...secondStyle, transition: "opacity 800ms ease-out", paddingBottom: "10px" }}>Collaborative</h3>
        <ul className="extra-list"
          style={{ ...secondStyle, transition: "opacity 2.2s ease", paddingBottom: "10px" }}
        >
          <li><a href="https://www.youtube.com/watch?v=BEV1Zn2OJaY" {...link}>
            Weaves</a></li>
          <li><a href="https://www.instagram.com/p/ChXYjZtAvIg/?utm_source=ig_web_copy_link" {...link}>
            Pink Blob </a>
            <a href="https://open.spotify.com/artist/09cw41atwDSbFQWxWfd1ni?si=2LGpYXWkSpie_NnajWot4Q" {...link}>(Morgan Waters)</a>
          </li>
          <li><a href="" {...link}>
            Scrap Arts Music</a></li>
          <li><a href="" {...link}>
            Our Founders</a></li>
        </ul>
        <br></br>
        <p className="music-bio"
          style={{ ...subStyle, transition: "opacity 3.6s ease" }}
        >
          I have been found on stages all around the world peforming with great artists such as
          <br></br>
          Jeremy Dutcher, Carly Rae Jepsen, The Weather Station, <br></br> The Toronto Sympony Orchestra, July Talk, Michael Bublé . . .
          <br></br>
          <br></br>
          . . . and . . .
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