import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import CurrentRenting from '../../components/CurrentRenting/CurrentRenting'

function Renting() {
  const { id: pathID } = useParams()

  const rent = logements.find((data) => data.id === pathID)

  return <CurrentRenting renting={rent} />
}

export default Renting
