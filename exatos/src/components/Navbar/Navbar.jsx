import exatosLogo from '../../imgs/Logo.png'
import './navbar.css'

const Navbar = () => {
    return (
      <>
      <nav className="navbar_section">
        <div>
          <img src={exatosLogo} alt="exatosLogo" className="logo" style={{ width: '10%', height: '10%' }} />
        </div>
        <div>
          <ul className="navbar_sections">
            <li><a href="/">Newslleter</a></li>
            <li><a href="/">Oportunidades</a></li>
            <li><a href="/">Jogos</a></li>
            <li><a href="/">Leitura</a></li>
            <li><a href="/">Eventos</a></li>
          </ul>
        </div>
      </nav>
      </>
    );
  };

export default Navbar;
