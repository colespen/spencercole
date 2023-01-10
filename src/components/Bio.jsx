import './styles.scss';
import './modal.scss';

export default function Bio(props) {
    const { handleShowHideWindow, view, transition } = props;

    // const handleProjectBtnClick = e => {
    //     transition(e.currentTarget.id);
    // };


    return (
        <section className="modal-main">
            <nav className="modal-nav">
                <button id="P1" onClick
                >Passions</button>
                <button id="P2" onClick
                >Extra</button>
            </nav>
            <button className="close-btn" onClick={handleShowHideWindow}>
                <img src="./close.png" alt="close-window" />
            </button>

            <header>
                <h1>Spencer Cole's Life</h1>
            </header>

            <main>
                <p>I am this person</p>
                <br></br>
                <p>who is good a this</p>
                <p>and love this and this</p>
                <br></br>
                <p>I have accomplished these things...</p>
            </main>

            {/* <div className="inner-window">
          { mode === "P1" && <Passions />}
          { mode === "P2" && <Extra />}
        </div> */}

        </section>
    );
}