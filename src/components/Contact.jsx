
import ContactForm from './ContactForm';
import './modal.scss';

export default function Contact(props) {
  const { handleShowHideWindow,
    // view, 
    // transition 
  } = props;

  // const handleBioBtnClick = e => {
  //     transition("bio", e.currentTarget.id);
  // };


  return (
    <section className="modal-main"
      style={{ overflow: 'hidden' }}>
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
        <header>
          <h1>CONNECT</h1>
        </header>

        <main className="main-description"
        style={{alignItems: 'center'}}>
          <p>Contact me.</p>
          <br></br>
          <ContactForm />
          <br></br>
          <p>thanks!</p>

        </main>
      </div>

      {/* <div className="inner-window">
          { mode === "P1" && <Passions />}
          { mode === "P2" && <Extra />}
        </div> */}

    </section>
  );
}