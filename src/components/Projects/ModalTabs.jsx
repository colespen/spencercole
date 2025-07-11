import { useState, useEffect } from "react";
import { tabConfig } from "./tabConfig";

export default function ModalTabs({ handleProjectBtnClick, navStyle }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile/tablet breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // On mobile: show 6 tabs (P1-P6), on desktop: show all 7 tabs (P1-P7)
  const visibleTabs = isMobile 
    ? tabConfig.slice(0, 6) 
    : tabConfig;
  
  return (
    <nav className="modal-nav" style={{ ...navStyle }}>
      {visibleTabs.map((tab) => (
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
