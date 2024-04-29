import { Link } from 'react-router-dom';
import exatosLogo from '../../imgs/Logo.png'
import './navbar.css'

const Navbar = () => {
    return (
      <>
      <nav className="navbar_section">
        <div>
          <Link to={"/"}>
            <img src={exatosLogo} alt="exatosLogo" className="logo" style={{ width: '10%', height: '10%' }} />
          </Link>
        </div>
        <div>
          <ul className="navbar_sections">
            <li><a href="/">Newslleter</a></li>
            <li><a href="/Oportunidades">Oportunidades</a></li>
            <li><a href="/Jogos">Jogos</a></li>
            <li><a href="/Filmes">Filmes</a></li>
            <li><a href="/Leituras">Leituras</a></li>
            <li><a href="/Eventos">Eventos</a></li>
          </ul>
        </div>
      </nav>
      </>
    );
  };

export default Navbar;
