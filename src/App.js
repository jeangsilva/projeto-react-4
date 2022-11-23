import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/Helloworlds';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jean Gabriel Silva
        </p>
        <HelloWorld/>
        <a
          className="App-link"
          href="https://softexrecife.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Softex - Goiana - PE
        </a>
      </header>
    </div>
  );
}

export default App;
