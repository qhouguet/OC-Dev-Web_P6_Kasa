import Banner from 'components/ui/Banner/Banner'
import image from 'images/home_banner.webp'
import RentingList from 'components/business/RentingList/RentingList'

function Home() {
  return (
    <>
      <div className="home-banner">
        <Banner
          subtitle="Chez vous, partout et ailleurs"
          image={image}
          alt="Photo de falaises face à la mer"
        />
      </div>
      <RentingList />
    </>
  )
}

export default Home
