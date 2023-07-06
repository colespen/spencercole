import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

import "../modalstyles.scss";
import LinkPreview from "./LinkPreview";
import Passions from "./Passions";
import Music from "./Music";

export default function Bio(props) {
  const {
    handleShowHideWindow,
    view,
    transition,
    handleOnMouseEnter,
    setIsSpringRest,
  } = props;

  const [modalStyle, setModalStyle] = useState({
    opacity: 0,
  });
  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });
  const [navStyle, setNavStyle] = useState({
    opacity: 0,
  });
  const [bioNavStyle, setBioNavStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavStyle({ opacity: 1 });
    }, 1250);
    return () => clearTimeout(timer);
  }, []);

  const springs = useSpring({
    from: { height: "0%", width: "0%", maxWidth: "0px" },
    to: { height: "75%", width: "88%", maxWidth: "1000px" },
    config: { mass: 2.1, tension: 250, friction: 28 },
    onStart: () => setIsSpringRest(false),
    onRest: () => setIsSpringRest(true),
  });

  const glowSpring = useSpring({
    loop: { reverse: true },
    from: { opacity: 0.8, color: "#3b5275" },
    to: { opacity: 1, color: "#75ffe6d4" },
    delay: 1250,
    config: { tension: 250, friction: 50 },
  });

  const handleBioBtnClick = (e) => {
    transition("bio", e.currentTarget.id);
  };

  useEffect(() => {
    if (view.tab) {
      const timer = setTimeout(() => {
        setBioNavStyle({ opacity: 1 });
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setBioNavStyle({ opacity: 0 });
    }
  }, [view.tab]);

  const cvPrev = "https://flowcv.com/resume/svm5jsc61b";

  return (
    <animated.section
      className="modal-main"
      style={{ ...springs, ...modalStyle }}
    >
      <nav className="modal-nav" style={{ ...navStyle }}>
        <button id="P1" style={{ width: "30%" }} onClick={handleBioBtnClick}>
          Passions
        </button>
        <button id="P2" style={{ width: "22%" }} onClick={handleBioBtnClick}>
          Music
        </button>
        {view.tab && (
          <button
            style={{
              ...bioNavStyle,
              transition: "opacity 600ms ease-in",
              width: "16%",
            }}
            onClick={handleBioBtnClick}
          >
            Bio
          </button>
        )}
      </nav>

      <button
        className="close-btn"
        onClick={handleShowHideWindow}
        onMouseEnter={handleOnMouseEnter}
      >
        <img src="./images/close.png" alt="close-window" />
      </button>

      {!view.tab ? (
        <div className="home-inner-window">
          <header
            style={{
              ...mainStyle,
              transition: "opacity 300ms ease-out",
            }}
          >
            <h1>LIFE</h1>
          </header>

          <main
            className="main-description"
            style={{
              ...mainStyle,
              marginTop: "25px",
              transition: "opacity 600ms ease-in",
            }}
          >
            <div className="bio-description" style={{ width: "95%" }}>
              <LinkPreview
                pClass={"rooftop-with-preview"}
                divClass={"rooftop-card"}
                image="./images/s_cole_rooftop_comp.jpg"
                href="./images/s_cole_rooftop.jpg"
              >
                <animated.span id="iButton" style={{ ...glowSpring }}>
                  I
                </animated.span>
              </LinkPreview>
              &nbsp;&nbsp; am a full-stack web developer with a highly creative
              background in music composition and production. Using ingenuity,
              my eye for design and attention to detail, I strive to create an
              intuitive and memorable experience for the user. Working with
              cutting-edge tools, I produce high-performance and well-tested
              products.
            </div>
            <br></br>

            <LinkPreview
              pClass={"link-with-preview"}
              divClass={"card"}
              image="./images/spencer_cole_cv.png"
              href={cvPrev}
            >
              &nbsp;Here is my Resume
            </LinkPreview>
          </main>
        </div>
      ) : (
        <>
          <animated.div
            className="home-inner-window"
            style={{ width: "80%", height: "85%" }}
          >
            {view.tab === "P1" && <Passions />}
            {view.tab === "P2" && <Music />}
          </animated.div>
        </>
      )}
    </animated.section>
  );
}
