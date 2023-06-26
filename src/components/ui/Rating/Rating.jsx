import redStar from 'images/red_star.svg'
import greyStar from 'images/grey_star.svg'

function Rating({ rating }) {
  const allStars = [1, 2, 3, 4, 5]
  const currentStars = rating

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
