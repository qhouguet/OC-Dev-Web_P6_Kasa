import Banner from '../../components/Banner/Banner'
import image from '../../assets/about_banner.webp'
import Collapse from '../../components/Collapse/Collapse'
import about from '../../data/about.json'

function About() {
  return (
    <div className="wrapper-width">
      <Banner
        type="about"
        image={image}
        alt="Photo d'une vallée au milieu des montagnes."
      />
      <div className="wrapper-width about-collapse">
        {about.map((data) => {
          return (
            <Collapse
              title={data.title}
              description={data.description}
              key={data.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default About
