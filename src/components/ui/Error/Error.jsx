import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <span className="error__title">404</span>
      <span className="error__description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
