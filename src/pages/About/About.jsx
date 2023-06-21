import Banner from '../../components/Banner/Banner'
import image from '../../assets/about_banner.webp'
import Collapse from '../../components/Collapse/Collapse'
import about from '../../data/about.json'

function About() {
  return (
    <>
      <Banner
        type="about"
        image={image}
        alt="Photo d'une vallée au milieu des montagnes."
      />

      {about.map((data) => {
        return (
          <Collapse
            title={data.title}
            description={data.description}
            key={data.id}
          />
        )
      })}
    </>
  )
}

export default About
