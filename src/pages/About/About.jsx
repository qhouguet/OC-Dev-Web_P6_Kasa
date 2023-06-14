import React from 'react'
import Banner from '../../components/Banner/Banner'
import image from '../../assets/about_banner.webp'
import Collapse from '../../components/Collapse/Collapse'
import about from '../../datas/about.json'

function About() {
  console.log(about[1].description)

  return (
    <div className="test">
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
    </div>
  )
}

export default About
