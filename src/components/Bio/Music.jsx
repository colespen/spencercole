import { useState, useEffect } from 'react';

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

  const myBandcamp = "https://spencercole.bandcamp.com/";
  const brokenSpotify = "https://open.spotify.com/album/50FbtklNm2N4lOKogGwRCO?si=PG0Jc1SyROiTaCzXOqhMFg";
  const brokenClip = "https://www.facebook.com/28103861/videos/10106365357818982/";
  const wasteSpotify = "https://music.apple.com/us/album/how-to-waste/1593461387";
  const hyperFollow = "https://hyperfollow.com/spencercole";
  const weavesVid = "https://www.youtube.com/watch?v=BEV1Zn2OJaY";
  const pinkBlobClip = "https://www.instagram.com/p/ChXYjZtAvIg/?utm_source=ig_web_copy_link";
  const pinkBlobRecord = "https://open.spotify.com/artist/09cw41atwDSbFQWxWfd1ni?si=2LGpYXWkSpie_NnajWot4Q";
  const scrapArtsClip = "https://vimeo.com/scrapartsmusic/agreement#t=161s";
  const oFclip = "https://fb.watch/i88G_19GcW/";
  const tvReel = "https://vimeo.com/showcase/6051857";


  return (
    <>
      <main className="main-description music">
        <h3 className="music-header"
          style={{
            ...firstStyle, transition: "opacity 400ms ease-out"
          }}>
          Solo Projects
        </h3>
          {/* TODO: link entire list to anchor! */}
        <ul className="extra-list"
          style={{ ...firstStyle, transition: "opacity 1200ms ease" }}
        >
          <li><a href={myBandcamp} {...link}>
            all releases</a></li>
          <li><a href={brokenSpotify} {...link}
            style={{ width: "78px" }}>
            BROKEN</a>
            <a className="inner-link"
              href={brokenClip} {...link}>(piano)</a>
          </li>
          <li><a href={wasteSpotify} {...link}>
            How To Waste</a>
          </li>
          <li style={{ margin: "0px" }}><a href={hyperFollow} {...link}>
            etc...</a>
            <a className="inner-link" href={tvReel} {...link}><img alt="arrow" src="./share.png"></img></a>
            <a className="inner-link"
              href={tvReel} {...link}>TV</a>
          </li>
        </ul>

        <br></br>
        <h3 className="music-header"
          style={{
            ...secondStyle, transition: "opacity 800ms ease-out"
          }}>
          Collaborative
        </h3>

        <ul className="extra-list"
          style={{ ...secondStyle, transition: "opacity 2.2s ease", paddingBottom: "10px" }}
        >
          <li><a href={weavesVid} {...link}>
            Weaves</a>
          </li>
          <li><a href={pinkBlobClip} {...link}
            style={{ width: "82px" }}>
            Pink Blob</a>
            <a style={{ width: "157px" }}
              className="inner-link"
              href={pinkBlobRecord} {...link}>(Morgan Waters)</a>

          </li>
          <li><a href={scrapArtsClip} {...link}>
            Scrap Arts Music</a></li>
          <li><a href={oFclip} {...link}>
            Our Founders</a></li>
        </ul>

        <p className="music-bio"
          style={{ ...subStyle, transition: "opacity 3.6s ease" }}
        >
          I have been found on stages all around the world
          <br></br>peforming with great artists such as
          <br></br>
          <strong>
            Jeremy Dutcher, Carly Rae Jepsen, The Weather Station, 
            <br></br> The Toronto Sympony Orchestra, July Talk, Michael Bublé
          </strong>
          <br></br>
          <br></br>
          . . . and . . .
          <br></br>
          <br></br>
          sharing the stage with great artists such as
          <br></br>
          <strong>
            Mitski, Tuneyards and Marilyn Manson
          </strong>
          <br></br>
          (to name a few).
        </p>
      </main>
    </>
  );
}