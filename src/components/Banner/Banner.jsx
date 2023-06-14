import React from 'react'

function Banner(props) {
  const bannerImage = props.image
  const altImage = props.alt

  return (
    <div className="wrapper-width ">
      <div
        className={
          props.type === 'home'
            ? 'home-banner'
            : props.type === 'about'
            ? 'about-banner'
            : 'location-carousel'
        }
      >
        <img className="image" src={bannerImage} alt={altImage} />
        <div className="overlay"></div>
        {props.subtitle ? <p>{props.subtitle}</p> : null}
      </div>
    </div>
  )
}

export default Banner
