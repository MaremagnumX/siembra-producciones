import logo from './siembra_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Siembra producciones
        </p>
        <a
          className="App-link"
          href="https://gitlab.com/MaremagnumX/siembra-producciones"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conoce más!
        </a>
      </header>
    </div>
  );
}

export default App;
