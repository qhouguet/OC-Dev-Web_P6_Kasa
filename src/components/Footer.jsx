import logo from '../assets/LOGO_WHITE.svg'

function Footer() {
  return (
    <footer id="footer">
      <img src={logo} className="logo-footer" alt="Logo de Kasa" />
      <span className="legal">© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
