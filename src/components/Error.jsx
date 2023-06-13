import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error-page">
      <span className="error-title">404</span>
      <span className="error-description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
