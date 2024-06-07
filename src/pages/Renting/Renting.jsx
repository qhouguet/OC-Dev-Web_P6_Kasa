import CurrentRenting from 'components/business/CurrentRenting/CurrentRenting'
import { useEffect, useState } from 'react'
import { fetchData } from 'services/fetch'
import Error from 'components/ui/Error/Error'
import { useParams } from 'react-router-dom'
import { Loading } from 'utils/components/'

function Renting() {
  // On vient utiliser deux states, un pour stocker notre retour de fetch
  // l'autre pour gérer le chargement du rendu de la page
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // On vient appeler notre fonction fetch, on stocke le résultat dans notre state data
  // et on vient mettre à jour notre state isLoading à false au même moment
  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
    fetchData().then((res) => {
      setData(res)
    })
  }, [])

  // On récupère l'id grâce au hook useParams de react-router
  const { id } = useParams()
  const rent = data.find((data) => data.id === id)

  if (isLoading) return <Loading />
  if (!rent) return <Error />
  return <CurrentRenting renting={rent} />
}

export default Renting
