import CurrentRenting from 'components/business/CurrentRenting/CurrentRenting'
import { useEffect, useState } from 'react'
import { fetchData } from 'services/fetch'
import Error from 'components/ui/Error/Error'
import { useParams } from 'react-router-dom'

function Renting() {
  // On vient utiliser deux states, un pour stocker notre retour de fetch
  // l'autre pour gérer le chargement du rendu de la page
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // On vient appeler notre fonction fetch, on stocke le résultat dans notre state data
  // et on vient mettre à jour notre state isLoading à false au même moment
  useEffect(() => {
    fetchData().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  // On récupère l'id grâce au hook useParams de react-router
  const { id } = useParams()

  // On va chercher l'objet dont l'id est égal à l'id passé en url si il existe
  const rent = data.find((data) => data.id === id)

  // Si on a pas encore eu le résultat du fetch, on affiche rien
  if (isLoading) return <></>

  // Si rent retourne autre chose qu'un objet (null, 0, undefined), !rent = true et on retourne notre page 404
  if (!rent) return <Error />

  return <CurrentRenting renting={rent} />
}

export default Renting
