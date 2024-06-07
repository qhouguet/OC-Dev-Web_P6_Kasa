import Banner from 'components/ui/Banner/Banner'
import image from 'images/home_banner.webp'
import RentingList from 'components/business/RentingList/RentingList'
import { useEffect, useState } from 'react'
import { fetchData } from 'services/fetch'
import { Loading } from 'utils/components/'
import Error from 'components/ui/Error/Error'

function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  // On vient appeler notre fonction fetch, on stocke le résultat dans notre state data
  // et on vient mettre à jour notre state isLoading à false au même moment
  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
    fetchData().then((res) => {
      setData(res)
    })
  }, [])

  if (isLoading) return <Loading />
  if (!data) return <Error />

  return (
    <>
      <div className="home-banner">
        <Banner subtitle="Chez vous, partout et ailleurs" image={image} alt="Photo de falaises face à la mer" />
      </div>
      <RentingList rentings={data} isLoading={isLoading} />
    </>
  )
}

export default Home
