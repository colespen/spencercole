import { useState, Fragment } from 'react';
import './styles.scss';
import Home from './Home';
import Projects from './Projects/Projects';

export default function Main() {
  const [show, setShow] = useState(false);

  const handleShowHideWindow = () => {
    !show ? setShow(true) : setShow(false);
  };

  return (
    <Fragment>
      <Home handleShowHideWindow={handleShowHideWindow}/>
      <Projects show={show} handleShowHideWindow={handleShowHideWindow}/>
    </Fragment>
  );
}