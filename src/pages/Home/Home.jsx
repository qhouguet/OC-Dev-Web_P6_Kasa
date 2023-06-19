import React from 'react'
import Banner from '../../components/Banner/Banner'
import image from '../../assets/home_banner.webp'
import Cards from '../../components/Cards/Cards'

function Home() {
  return (
    <div>
      <Banner
        type="home"
        subtitle="Chez vous, partout et ailleurs"
        image={image}
        alt="Photo de falaises face à la mer"
      />
      <Cards />
    </div>
  )
}

export default Home
