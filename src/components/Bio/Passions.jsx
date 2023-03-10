import { useState, useEffect } from 'react';

import '../modal.scss';
import './Bio.scss'


export default function Passions() {

  const [mainStyle, setMainStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainStyle({ opacity: 1 });
    }, 0);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 500ms ease" }}
      >
      </header>


      <main className="main-description"
        style={{ ...mainStyle, transition: "opacity 500ms ease-in" }}
      >
        <h3
        style={{fontSize: "130%", fontWeight: "400"}}
        >Things that thrill me</h3>
        <br></br>
        <ul className="passion-list">
          <li>the process of creation <br></br>
            (creating something <br></br>from nothing)
          </li>
          <li>originality</li>
          <li>building something as useful
            <br></br>
            as it is beautiful
          </li>
          <li>Music. <br></br>(performing, and especially composing)</li>
        </ul>
      </main>
    </>
  );
}