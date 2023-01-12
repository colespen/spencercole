import { Fragment, useEffect } from 'react';

import './styles.scss';

export default function Home({ handleShowHideWindow, show }) {

  useEffect(() => {
    
  }, [show])

  return (
    <Fragment>
      <div className="title-nav-container">

        <h1 className="title">Spencer Cole</h1>

        <div className="navigate">
          <button className="nav-btn" id="projects"
            onClick={handleShowHideWindow}
          >projects
          </button>
          <button className="nav-btn" id="bio"
            onClick={handleShowHideWindow}
          >bio</button>
          <button className="nav-btn" id="contact"
            onClick={handleShowHideWindow}
          >contact</button>
        </div>

      </div>
    </Fragment>
  );
}