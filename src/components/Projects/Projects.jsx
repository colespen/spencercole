import classNames from 'classnames';
import '../Projects.scss';


export default function Projects({ show, handleShowHideWindow }) {

  const windowShowHide = classNames(
    "window", {
    "display-block": !show,
    "display-none": show,
  });



  return (
    <div className={windowShowHide}>
      <section className="window-main">
        <nav className="projects-nav">
          <button>project1</button>
          <button>project2</button>
          <button>project3</button>
          <button>project4</button>
        </nav>
          <button className="close-btn" onClick={handleShowHideWindow}>
            <img src="./close.png" alt="close-window"/>
            </button>

        <header>
          <h1>Project1</h1>
        </header>

        <main>
          <p>this is a project</p>
          <br></br>
          <p>the stack is this and this and this</p>
          <p>and this as well.</p>
          <br></br>
          <p>check it out here.</p>
        </main>
      </section>
    </div>
  );
}