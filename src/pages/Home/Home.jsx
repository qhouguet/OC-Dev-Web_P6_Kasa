import React from 'react'
import Banner from '../../components/Banner/Banner'
import image from '../../assets/home_banner.webp'

function Home() {
  return (
    <div>
      <Banner
        type="home"
        subtitle="Chez vous, partout et ailleurs"
        image={image}
        alt="Photo de falaises face à la mer"
      />
    </div>
  )
}

export default Home
