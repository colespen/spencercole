import { Fragment } from 'react';
import './Main.scss';

export default function Title() {
    return (
        <Fragment>
            <div className="title-nav-container">
                <h1 className="title">Spencer Cole</h1>
                <div className="navigate">
                    <button classname="nav-btn" id="projects">projects</button>
                    <button classname="nav-btn" id="bio">bio</button>
                    <button classname="nav-btn" id="contact">contact</button>
                </div>
            </div>
        </Fragment>
    );
}


