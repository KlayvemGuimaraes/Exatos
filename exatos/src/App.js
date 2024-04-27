import './App.css';
import GradeFigura from './components/cards/grade/GradeSimples';
import CardSimples from './components/cards/simples/CardSimples'
import CardFigura from './components/cards/figura/CardFigura'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/cards/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <div className="App">
      <header className="App-header">
        <CardSimples materiaId="1"></CardSimples>              
        <CardFigura materiaId="2"></CardFigura>
        <GradeFigura materiaId="3"></GradeFigura>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
    <Footer/>
    </>
  );
}

export default App;