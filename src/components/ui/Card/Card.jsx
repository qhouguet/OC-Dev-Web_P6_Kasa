import { Link } from 'react-router-dom'

function Card({ title, image, alt, id }) {
  // On redirige au clic sur notre carte vers un url où on passe en paramètre
  // l'id de l'objet correspondant à notre carte.
  return (
    <Link
      className="card-container"
      to={{ pathname: '/renting', search: `?_id=${id}` }}
    >
      <figure className="card">
        <img className="card__image" src={image} alt={alt}></img>
        <div className="card__overlay"></div>
        <figcaption className="card__caption">
          {title ? title : 'Titre de la location'}
        </figcaption>
      </figure>
    </Link>
  )
}

export default Card
