import { Link } from 'react-router-dom'
import React from 'react'

function Card(props) {
  return (
    <Link to={`/renting/${props.id}`}>
      <figure className="card">
        <img src={props.image} alt={props.alt}></img>
        <div className="mask-over"></div>
        <figcaption>
          {props.title ? props.title : 'Titre de la location'}
        </figcaption>
      </figure>
    </Link>
  )
}

export default Card
