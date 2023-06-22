import Banner from '../../components/Banner/Banner'
import image from '../../images/home_banner.webp'
import RentingList from '../../components/RentingList/RentingList'

function Home() {
  return (
    <div className="wrapper-width">
      <Banner
        type="home"
        subtitle="Chez vous, partout et ailleurs"
        image={image}
        alt="Photo de falaises face à la mer"
      />
      <RentingList />
    </div>
  )
}

export default Home
