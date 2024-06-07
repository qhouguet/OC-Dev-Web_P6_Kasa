import { Link } from 'react-router-dom'

function Card(props) {
  if (!props) return null
  const { title, image, alt, path } = props
  // On redirige au clic sur notre carte vers un url où on passe en paramètre notre path
  return (
    <Link className="card-container" to={path}>
      <figure className="card">
        <img className="card__image" src={image} alt={alt}></img>
        <div className="card__overlay"></div>
        <figcaption className="card__caption">{title || 'Titre de la location'}</figcaption>
      </figure>
    </Link>
  )
}

export default Card
