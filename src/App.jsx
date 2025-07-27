import "./App.scss";
import { HelmetProvider } from 'react-helmet-async';
import Main from "./components";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Main />
      </div>
    </HelmetProvider>
  );
}

export default App;
