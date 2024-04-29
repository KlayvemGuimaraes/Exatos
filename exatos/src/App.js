import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import DetalhesNoticia from './components/detalhesNoticia/DetalhesNoticia';
import TelaCategoria from './components/telaCategoria/TelaCategoria';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<DetalhesNoticia />} />
          <Route path="/Filmes" element={<TelaCategoria />} />
          <Route path="/Jogos" element={<TelaCategoria />} />
          <Route path="/Leituras" element={<TelaCategoria />} />
          <Route path="/Eventos" element={<TelaCategoria />} />
          <Route path="/Oportunidades" element={<TelaCategoria />} />
        </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
