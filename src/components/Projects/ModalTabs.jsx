import { tabConfig } from "../../config/tabConfig";

export default function ModalTabs({ handleProjectBtnClick, navStyle }) {
  return (
    <nav className="modal-nav" style={{ ...navStyle }}>
      {tabConfig.map((tab) => (
        <button key={tab.id} id={tab.id} onClick={handleProjectBtnClick}>
          <img
            className="tab-icon"
            src={tab.icon}
            alt={tab.alt}
            style={tab.style || {}}
          />
        </button>
      ))}
    </nav>
  );
}
