import { Link } from 'react-router-dom'
import { ERROR_NOT_FOUND } from 'utils/constant'

function Error() {
  return (
    <div className="error">
      <span className="error__title">{ERROR_NOT_FOUND['code']}</span>
      <span className="error__description">{ERROR_NOT_FOUND['notFound']}</span>
      <Link className="error__link" to="/">
        {ERROR_NOT_FOUND['goBack']}
      </Link>
    </div>
  )
}

export default Error
