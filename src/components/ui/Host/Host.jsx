function Host(props) {
  // On vient split le nom de notre hôte en deux variables pour gérer l'affichage
  // proprement
  const name = props.name.split(' ')
  const firstName = name[0]
  const lastName = name[1]

  return (
    <div className="host">
      <span>
        {firstName}
        <br />
        {lastName}
      </span>
      <img src={props.picture} alt="Hôte" />
    </div>
  )
}

export default Host
