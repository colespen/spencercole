import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

import './modal.scss';

export default function Bio(props) {
  const { handleShowHideWindow
    // view, 
    // transition 
  } = props;

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
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavStyle({ opacity: 1 });
    }, 1250);
    return () => clearTimeout(timer);
  }, []);


  const springs = useSpring({
    from: { height: "0%", width: "0%" },
    to: { height: "65%", width: "75%" },
    config: { mass: 2.1, tension: 250, friction: 28 }
  });

  // const handleBioBtnClick = e => {
  //     transition("bio", e.currentTarget.id);
  // };


  return (
    <animated.section className="modal-main"
      style={{ ...springs, ...modalStyle }}>
      <nav className="modal-nav"
      style={{...navStyle}}
      >
        <button id="P1"
          style={{ width: "26%" }}
        // onClick={handleBioButtonClick}
        >Passions</button>
        <button id="P2"
          style={{ width: "26%" }}
        // onClick={handleBioButtonClick}
        >Extra</button>
      </nav>
      <button className="close-btn" onClick={handleShowHideWindow}>
        <img src="./close.png" alt="close-window" />
      </button>

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
          <p>Full-stack web developer with a highly creative background in music production. Using
            ingenuity, my eye for design and attention to detail, I strive to create an intuitive and visually
            stunning experience for the user. Working with cutting-edge tools, I produce high-performance
            and well-tested products.</p>
          <br></br>
          <p>who is good a this</p>
          <p>and love this and this</p>
          <br></br>
          <p><a href="https://docs.google.com/document/d/1EnxTwBGiWjiEPK8DkzJdpTd0Hh2cz1mgbzSocljhtyw/edit#heading=h.5x0d5h95i329">I have accomplished these things...</a></p>
        </main>
      </div>

      {/* <div className="inner-window">
          { mode === "P1" && <Passions />}
          { mode === "P2" && <Extra />}
        </div> */}

    </animated.section>
  );
}