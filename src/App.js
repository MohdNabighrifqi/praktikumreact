import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Music of the 90s</h1>
        <p>
          Relive the sounds of the 90s!
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/1990s_in_music"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore 90s Music
        </a>
      </header>
    </div>
  );
}

export default App;
