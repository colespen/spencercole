import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

import ContactForm from './ContactForm';
import './modal.scss';

export default function Contact(props) {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { handleShowHideWindow, handleOnMouseEnter,
    setIsSpringRest
    // view, transition 
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
    from: { width: "0%", maxWidth: "0px" },
    to: { width: "88%", maxWidth: "1000px" },
    config: { mass: 5.2, tension: 120, friction: 42 },
    onStart: () => setIsSpringRest(false),
    onRest: () => setIsSpringRest(true),
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
      <button
        className="close-btn"
        onClick={handleShowHideWindow}
        onMouseEnter={handleOnMouseEnter}
      >
        <img src="./images/close.png" alt="close-window" />
      </button>

      <div className="home-inner-window">
        <header className="contact-header"
          style={{ ...modalStyle, transition: 'opacity 800ms ease-in' }}
        >
          <h1>CONNECT</h1>
        </header>

        <main className="main-description contact"
          style={{
            alignItems: 'center',
            opacity: mainStyle.opacity1,
            transition: 'opacity 500ms ease-in',
          }}
        >
          <p id="contact-me"
            style={{
              opacity: mainStyle.opacity2, transition: 'opacity 1.5s ease'
            }}>
            Contact me.
          </p>
          <br></br>
          <ContactForm setFormSubmitted={setFormSubmitted} />
          <br></br>
          <p style={{
            height: '25px',
            opacity: mainStyle.opacity3, transition: 'opacity 300ms ease'
          }}>
            {formSubmitted ? "thanks!" : ""}
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