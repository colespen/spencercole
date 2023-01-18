import { useState, useEffect, Fragment } from 'react';

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

  // const link = { 
  //   href: "https://github.com/colespen/Jungle", target: "_blank", rel: "noreferrer"
  // }



  return (
    <Fragment>

      <header className="tab-header"
        style={{ ...mainStyle, transition: "opacity 1.5s ease" }}
      >
        <h1>Passions</h1>
      </header>


      <main className="main-description"
        style={{ ...mainStyle, transition: "opacity 1s ease" }}
      >
        <h3>Things that thrill me</h3>
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
          <li>Music. <br></br>(checkout Extra)</li>
        </ul>
      </main>
    </Fragment>
  );
}