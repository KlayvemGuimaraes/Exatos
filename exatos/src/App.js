import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import DetalhesNoticia from './components/detalhesNoticia/DetalhesNoticia';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<DetalhesNoticia />} />
        </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
