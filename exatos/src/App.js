import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GradeFigura from './components/cards/grade/GradeSimples';
import CardSimples from './components/cards/simples/CardSimples';
import CardFigura from './components/cards/figura/CardFigura';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/cards/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/card-simples" element={<CardSimples />} />
        <Route path="/card-figura" element={<CardFigura />} />
        <Route path="/grade-figura" element={<GradeFigura />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
