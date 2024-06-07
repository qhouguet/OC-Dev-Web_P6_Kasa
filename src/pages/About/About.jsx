import Banner from 'components/ui/Banner/Banner'
import image from 'images/about_banner.webp'
import Collapse from 'components/ui/Collapse/Collapse'
import { ABOUT_LISTING } from 'utils/constant'

function About() {
  return (
    <>
      <div className="about-banner">
        <Banner
          type="about"
          image={image}
          alt="Photo d'une vallée au milieu des montagnes."
        />
      </div>
      <section className="about-collapse">
        {ABOUT_LISTING.map((data) => {
          return (
            <Collapse
              title={data.title}
              description={data.description}
              key={data.id}
            />
          )
        })}
      </section>
    </>
  )
}

export default About
