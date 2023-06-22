import CurrentRenting from '../../components/CurrentRenting/CurrentRenting'
import { useEffect, useState } from 'react'
import { fetchData } from '../../services/fetch'
import Error from '../../components/Error/Error'

function Renting() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  let params = new URL(document.location).searchParams
  const pathID = params.get('_id')

  const rent = data.find((data) => data.id === pathID)

  if (isLoading) return <></>
  if (!rent) return <Error />

  return <CurrentRenting renting={rent} />
}

export default Renting
