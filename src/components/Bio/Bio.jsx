import { useState, useEffect, Fragment } from 'react';
import { useTransition, animated, useSpring } from '@react-spring/web';

import '../modal.scss';
import LinkPreview from './LinkPreview';
import Passions from './Passions';
import Extra from './Extra';

export default function Bio(props) {
  const {
    handleShowHideWindow, view, transition
  } = props;

  const [isShown, setIsShown] = useState(false);
  
  const [modalStyle, setModalStyle] = useState({
    opacity: 0
  });
  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });
  const [navStyle, setNavStyle] = useState({
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
    to: { height: "75%", width: "83%", maxWidth: "850px" },
    config: { mass: 2.1, tension: 250, friction: 28 }
  });

  
  const handleBioBtnClick = e => {
    transition("bio", e.currentTarget.id);
  };
  
  const fadeSpring = useTransition(view.tab, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });


  return (
    <animated.section className="modal-main"
      style={{ ...springs, ...modalStyle }}>

      <nav className="modal-nav"
        style={{ ...navStyle }}
      >
        <button id="P1"
          style={{ width: "26%" }}
        onClick={handleBioBtnClick}
        >Passions</button>
        <button id="P2"
          style={{ width: "26%" }}
        onClick={handleBioBtnClick}
        >Extra</button>
      </nav>

      <button className="close-btn" onClick={handleShowHideWindow}>
        <img src="./close.png" alt="close-window" />
      </button>

      {!view.tab ?
        <div className="home-inner-window">
          <header className="bio-header"
            style={{
              ...mainStyle,
              transition: 'opacity 600ms ease-in'
            }}
          >
            <h1>LIFE</h1>
          </header>

          <main className="main-description"
            style={{
              ...mainStyle,
              marginTop: '25px',
              transition: 'opacity 600ms ease-out'
            }}
          >
            <p>I am a full-stack web developer with a highly creative background in music composition and production. Using ingenuity, my eye for design and attention to detail, I strive to create an intuitive and memorable experience for the user. Working with cutting-edge tools, I produce high-performance and well-tested products.</p>
            <br></br>

            <LinkPreview
              href="https://docs.google.com/document/d/1EnxTwBGiWjiEPK8DkzJdpTd0Hh2cz1mgbzSocljhtyw/preview"
              image="./spencer_cole_cv.png"
            >Here is my Resume</LinkPreview>

          </main>
        </div>
        :
        <Fragment>
        {fadeSpring((style, item) =>
        item &&
        <animated.div className="home-inner-window"
        style={style}
        >
          {view.tab === "P1" && <Passions />}
          {view.tab === "P2" && <Extra />}
        </animated.div>
        )}
        </Fragment>
      }
    </animated.section>
  );
}