function Card(props) {
  return (
    <figure className="card">
      <img src={props.image} alt={props.alt}></img>
      <div className="mask-over"></div>
      <figcaption>
        {props.title ? props.title : 'Titre de la location'}
      </figcaption>
    </figure>
  )
}

export default Card
