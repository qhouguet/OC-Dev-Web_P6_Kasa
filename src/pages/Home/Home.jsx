import Banner from '../../components/Banner/Banner'
import image from '../../assets/home_banner.webp'
import Cards from '../../components/RentingList/RentingList'

function Home() {
  return (
    <>
      <Banner
        type="home"
        subtitle="Chez vous, partout et ailleurs"
        image={image}
        alt="Photo de falaises face à la mer"
      />
      <Cards />
    </>
  )
}

export default Home
