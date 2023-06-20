import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'
import CurrentRenting from '../../components/CurrentRenting/CurrentRenting'

function Renting() {
  const { id: pathID } = useParams()

  const rent = logements.find((data) => data.id === pathID)
  console.log(rent)

  return (
    <div>
      <CurrentRenting />
    </div>
  )
}

export default Renting
