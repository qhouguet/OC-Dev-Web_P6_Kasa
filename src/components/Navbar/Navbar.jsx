import Logo from '../../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="wrapper-width">
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="Logo de Kasa" />
        </div>
        <nav>
          <ul className="navbar">
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/about">
              <li>A Propos</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Navbar
