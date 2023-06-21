function Host(props) {
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
