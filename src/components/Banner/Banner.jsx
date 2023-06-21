function Banner(props) {
  const bannerImage = props.image
  const altImage = props.alt

  const classType = props.type
  let classDiv = ''
  switch (classType) {
    case 'home':
      classDiv = 'home-banner'
      break
    case 'about':
      classDiv = 'about-banner'
      break
    default:
      classDiv = ''
  }

  return (
    <>
      <div className={classDiv}>
        <img className="image" src={bannerImage} alt={altImage} />
        <div className="overlay"></div>
        {props.subtitle ? <h1>{props.subtitle}</h1> : null}
      </div>
    </>
  )
}

export default Banner
