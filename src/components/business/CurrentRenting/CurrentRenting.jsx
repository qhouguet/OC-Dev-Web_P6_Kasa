import Gallery from 'components/ui/Gallery/Gallery'
import RentingDescription from 'components/ui/RentingDescription/RentingDescription'

function CurrentRenting({ renting }) {
  return (
    <>
      <Gallery images={renting.pictures} alt={renting.title} />
      <RentingDescription
        title={renting.title}
        description={renting.description}
        host={renting.host}
        rating={renting.rating}
        location={renting.location}
        equipments={renting.equipments}
        tags={renting.tags}
      />
    </>
  )
}

export default CurrentRenting
