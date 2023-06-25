import Gallery from 'components/ui/Gallery/Gallery'
import RentingDescription from 'components/ui/RentingDescription/RentingDescription'

function CurrentRenting(props) {
  const currentRent = props.renting

  return (
    <>
      <Gallery images={currentRent.pictures} alt={currentRent.title} />
      <RentingDescription
        title={currentRent.title}
        description={currentRent.description}
        host={currentRent.host}
        rating={currentRent.rating}
        location={currentRent.location}
        equipments={currentRent.equipments}
        tags={currentRent.tags}
      />
    </>
  )
}

export default CurrentRenting
