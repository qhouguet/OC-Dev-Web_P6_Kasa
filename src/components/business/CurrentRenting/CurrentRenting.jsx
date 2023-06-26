import Gallery from 'components/ui/Gallery/Gallery'
import RentingDescription from 'components/ui/RentingDescription/RentingDescription'

function CurrentRenting({ renting }) {
  // On récupère en props notre objet rent qui contient le logement dont l'id
  // correspondait à l'id passé en url. On passe les valeurs de cet objet en props
  // de nos composants Gallery et RentingDescription
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
