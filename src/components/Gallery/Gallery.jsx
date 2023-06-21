import { useState } from 'react'
import leftBracket from '../../assets/left-bracket.svg'
import rightBracket from '../../assets/right-bracket.svg'

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  let isMultipleImages = false

  if (images.length > 1) {
    isMultipleImages = true
  }

  return (
    <div className="slideshow">
      {isMultipleImages ? (
        <>
          <img
            className="left-bracket"
            src={leftBracket}
            alt="Bouton vers la slide précédente"
            onClick={goToPrevious}
          />
          <img
            className="right-bracket"
            src={rightBracket}
            alt="Bouton vers la slide suivante"
            onClick={goToNext}
          />
          <div className="slide-numerotation">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      ) : null}
      <img className="slide" src={images[currentIndex]} alt="Test" />
    </div>
  )
}

export default Gallery
