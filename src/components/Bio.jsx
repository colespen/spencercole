import './modal.scss';

export default function Bio(props) {
  const { handleShowHideWindow,
    // view, 
    // transition 
  } = props;

  // const handleBioBtnClick = e => {
  //     transition("bio", e.currentTarget.id);
  // };


  return (
    <section className="modal-main">
      <nav className="modal-nav">
        <button id="P1"
        // onClick={handleBioButtonClick}
        >Passions</button>
        <button id="P2"
        // onClick={handleBioButtonClick}
        >Extra</button>
      </nav>
      <button className="close-btn" onClick={handleShowHideWindow}>
        <img src="./close.png" alt="close-window" />
      </button>

      <div className="home-inner-window">
        <header>
          <h1>LIFE</h1>
        </header>

        <main className="main-description">
          <p>Full-stack web developer with a highly creative background in music production. Using
            ingenuity, my eye for design and attention to detail, I strive to create an intuitive and visually
            stunning experience for the user. Working with cutting-edge tools, I produce high-performance
            and well-tested products.</p>
          <br></br>
          <p>who is good a this</p>
          <p>and love this and this</p>
          <br></br>
          <p>I have accomplished these things...</p>
        </main>
      </div>

      {/* <div className="inner-window">
          { mode === "P1" && <Passions />}
          { mode === "P2" && <Extra />}
        </div> */}

    </section>
  );
}