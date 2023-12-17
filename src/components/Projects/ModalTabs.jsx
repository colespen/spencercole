export default function ModalTabs({ handleProjectBtnClick, navStyle }) {
  return (
    <nav className="modal-nav" style={{ ...navStyle }}>
      <button id="P1" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/globeicon.png"
          alt="showfinder tab"
        />
      </button>
      <button id="P2" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/brainericon.png"
          alt="scheduler tab"
        />
      </button>
      <button id="P3" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/voiceassistanticon.png"
          alt="scheduler tab"
        />
      </button>
      <button id="P4" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/SMSicon.png"
          alt="SMS tab"
          style={{ height: "32px", paddingTop: "2px" }}
        />
      </button>
      <button id="P5" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/avatar-1.png"
          alt="madcap tab"
        />
      </button>
      <button id="P6" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/quizappicon.png"
          alt="quizapp tab"
          style={{ height: "28px", paddingTop: "1px" }}
        />
      </button>
      {/* <button id="P6" onClick={handleProjectBtnClick}>
        <img
          className="tab-icon"
          src="./images/schedulericon.png"
          alt="scheduler tab"
        />
      </button> */}
    </nav>
  );
}
