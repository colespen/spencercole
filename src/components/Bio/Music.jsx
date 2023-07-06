import { useState, useEffect } from "react";

import { musicUrls } from "./musicLinks";

import "./Bio.scss";
import "../modal.scss";

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

  const clickHandler = (e) => {
    const href = e.target.querySelector("a")?.getAttribute("href");
    const target = e.target.querySelector("a")?.getAttribute("target");
    href && target && window.open(href, target);
  };

  const link = {
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <>
      <main className="main-description music">
        <h3
          className="music-header"
          style={{
            ...firstStyle,
            transition: "opacity 400ms ease-out",
          }}
        >
          Solo Projects
        </h3>
        {/* TODO: link entire list to anchor! */}
        <ul
          className="extra-list"
          style={{ ...firstStyle, transition: "opacity 1200ms ease" }}
        >
          <li onClick={clickHandler}>
            <a href={musicUrls.myBandcamp} {...link}>
              all releases
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href={musicUrls.brokenSpotify} {...link}>
              BROKEN
            </a>
            <a id="inner-link" href={musicUrls.brokenClip} {...link}>
              (piano)
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href={musicUrls.wasteSpotify} {...link}>
              How To Waste
            </a>
          </li>
          <li onClick={clickHandler} style={{ margin: "0px" }}>
            <a href={musicUrls.hyperFollow} {...link}>
              etc...
              <a
                className="inner-link"
                id="arrow-icon"
                href={musicUrls.tvReel}
                {...link}
              >
                <img alt="arrow" src="./share.png"></img>
              </a>
              <a id="inner-link" href={musicUrls.tvReel} {...link}>
                TV
              </a>
            </a>
          </li>
        </ul>

        <br></br>
        <h3
          className="music-header"
          style={{
            ...secondStyle,
            transition: "opacity 800ms ease-out",
          }}
        >
          Collaborative
        </h3>

        <ul
          className="extra-list"
          style={{
            ...secondStyle,
            transition: "opacity 2.2s ease",
            paddingBottom: "10px",
          }}
        >
          <li onClick={clickHandler}>
            <a href={musicUrls.weavesVid} {...link}>
              Weaves
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href={musicUrls.pinkBlobClip} {...link}>
              Pink Blob
            </a>
            <a
              style={{ width: "157px" }}
              id="inner-link"
              href={musicUrls.pinkBlobRecord}
              {...link}
            >
              (Morgan Waters)
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href={musicUrls.scrapArtsClip} {...link}>
              Scrap Arts Music
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href={musicUrls.oFclip} {...link}>
              Our Founders
            </a>
          </li>
        </ul>

        <p
          className="music-bio"
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
          <br></br>. . . and . . .<br></br>
          <br></br>
          sharing the stage with great artists such as
          <br></br>
          <strong>Mitski, Tuneyards and Marilyn Manson</strong>
          <br></br>
          (to name a few).
        </p>
      </main>
    </>
  );
}
