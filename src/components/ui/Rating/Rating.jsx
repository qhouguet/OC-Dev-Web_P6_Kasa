import redStar from 'images/red_star.svg'
import greyStar from 'images/grey_star.svg'

function Rating({ rating }) {
  // On vient créer un tableau qui va de 1 à 5 pour gérer les notes
  const allStars = [1, 2, 3, 4, 5]
  const currentStars = rating

  // Lors du parcours de notre tableau, on retourne des étoiles rouges tant que la valeur de nos props
  // est inférieure ou égale aux valeurs de notre tableau, sinon on retourne des étoiles grises.
  return (
    <div className="rating">
      {allStars.map((star) =>
        currentStars >= star ? (
          <img key={star} src={redStar} alt="Étoile rouge" />
        ) : (
          <img key={star} src={greyStar} alt="Étoile grise" />
        )
      )}
    </div>
  )
}

export default Rating
