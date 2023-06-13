import React from 'react'

function Banner(props) {
  return (
    <div className={props.type === 'home' ? 'home-banner' : 'about-banner'}>
      {props.subtitle ? <p>{props.subtitle}</p> : null}
    </div>
  )
}

export default Banner
