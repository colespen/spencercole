import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

import ContactForm from './ContactForm';
import './modal.scss';

export default function Contact(props) {
  const { handleShowHideWindow,
    // view, 
    // transition 
  } = props;

  const [mainStyle, setMainStyle] = useState({
    opacity1: 0,
    opacity2: 0,
    opacity3: 0,
  });

  const [modalStyle, setModalStyle] = useState({
    opacity: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle(prev => (
        { ...prev, opacity1: 1 }
      ));
    }, 950);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle(prev => (
        { ...prev, opacity2: 1 }
      ));
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle(prev => (
        { ...prev, opacity3: 1 }
      ));
    }, 2350);
    return () => clearTimeout(timer);
  }, []);

  const springs = useSpring({
    from: { width: "0%",  maxWidth: "0px" },
    to: { width: "88%",  maxWidth: "850px" },
    config: { mass: 5.2, tension: 120, friction: 42 }
  });

  // const handleBioBtnClick = e => {
  //     transition("bio", e.currentTarget.id);
  // };


  return (
    <animated.section className="modal-main"
      style={{ overflow: 'hidden', ...springs, ...modalStyle }}>
      <nav className="modal-nav">
        {/* <button id="P1" 
                // onClick={handleBioButtonClick}
                >Passions</button>
                <button id="P2" 
                // onClick={handleBioButtonClick}
                >Extra</button> */}
      </nav>
      <button className="close-btn" onClick={handleShowHideWindow}>
        <img src="./close.png" alt="close-window" />
      </button>

      <div className="home-inner-window">
        <header className="contact-header"
        style={{...modalStyle, transition: 'opacity 800ms ease-in'}}
        >
          <h1>CONNECT</h1>
        </header>

        <main className="main-description contact"
          style={{
            alignItems: 'center',
            opacity: mainStyle.opacity1,
            transition: 'opacity 800ms ease',
          }}
        >
          <p style={{
            opacity: mainStyle.opacity2, transition: 'opacity 1.5s ease'
          }}>
            Contact me.
          </p>
          <br></br>
          <ContactForm />
          <br></br>
          <p style={{
            opacity: mainStyle.opacity3, transition: 'opacity 300ms ease'
          }}>
            thanks!
          </p>
        </main>
      </div>

      {/* <div className="inner-window">
          { mode === "P1" && <Passions />}
          { mode === "P2" && <Extra />}
        </div> */}

    </animated.section>
  );
}