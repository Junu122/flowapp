import React from 'react'
import About from '../components/about/AboutIntro'
import AboutHero from '../components/about/AboutHero'
import FoundingStory from '../components/about/FoundingStory'
import Cta from '../components/cta/Cta'
const AboutUs = () => {
  return (
    <>
    <AboutHero />
    <FoundingStory />
    <About />
    <Cta />
    </>
  )
}

export default AboutUs