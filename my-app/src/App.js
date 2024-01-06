import logo from './logo.svg';
import './App.css';
import PrimeiroComponente from './componentes/PrimeiroComponente'
import BoxG from './componentes/BoxG'
import MediaRecord from './componentes/MediaRecord'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MediaRecord />
        <BoxG />
        <PrimeiroComponente />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
