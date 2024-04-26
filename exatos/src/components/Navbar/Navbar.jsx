import logo from '../../imgs/image.png'
import './navbar.css'

const Navbar = () => {
    return (
      <>
      <nav>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
          </ul>
        </div>
      </nav>
      </>
    );
  };

export default Navbar;
