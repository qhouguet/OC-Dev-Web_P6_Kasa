import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import { fetchData } from '../../services/fetch'

function Cards() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then((res) => {
      setData(res)
    })
  }, [])

  return (
    <>
      <section className="cards">
        {data.map((data) => (
          <Card
            title={data.title}
            image={data.cover}
            alt={data.title}
            id={data.id}
            key={data.id}
          />
        ))}
      </section>
    </>
  )
}

export default Cards
