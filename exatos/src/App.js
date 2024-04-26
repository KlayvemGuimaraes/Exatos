import logo from './logo.svg';
import './App.css';
import CardSimples from './components/cards/simples/CardSimples';
import CardFigura from './components/cards/figura/CardFigura';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <CardSimples materiaId="1"></CardSimples>              
        <CardFigura materiaId="2"></CardFigura>

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
