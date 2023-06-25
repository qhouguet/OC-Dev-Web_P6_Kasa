import logo from 'images/LOGO_WHITE.svg'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Kasa" />
      <span className="footer__legal">© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
