import Logo from 'images/LOGO.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={Logo} alt="Logo de Kasa" />
        </div>
        <nav>
          <ul className="header__navbar">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
