import Gallery from '../Gallery/Gallery'

function CurrentRenting(props) {
  const currentRent = props.renting

  return (
    <div className="wrapper-width">
      <Gallery images={currentRent.pictures} />
    </div>
  )
}

export default CurrentRenting
