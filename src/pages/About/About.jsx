import React from 'react'
import Banner from '../../components/Banner/Banner'
import image from '../../assets/about_banner.webp'

function About() {
  return (
    <div>
      <Banner
        type="about"
        image={image}
        alt="Photo d'une vallée au milieu des montagnes."
      />
    </div>
  )
}

export default About
