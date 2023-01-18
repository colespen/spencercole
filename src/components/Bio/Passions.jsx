import { useState, useEffect, Fragment } from 'react';

import '../modal.scss';


export default function Passions() {

  // const [mainStyle, setMainStyle] = useState({
  //   opacity: 0,
  // });


  // const link = { 
  //   href: "https://github.com/colespen/Jungle", target: "_blank", rel: "noreferrer"
  // }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setMainStyle({ opacity: 1 });
  //   }, 900);
  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <Fragment>

     <header className="bio-header">
            <h1>Passions</h1>
          </header>


      <main className="tab-description">
      <h3>Things that thrill me -</h3>
        <ul>
          <li>the process of creation <br></br>
          (creating something from nothing)
          </li>
          <li>originality</li>
          <li>building something as useful
          <br></br>
          as it is beautiful
          </li>
          <li>Music. (checkout Extra)</li>
        </ul>
      </main>
    </Fragment>
  );
}