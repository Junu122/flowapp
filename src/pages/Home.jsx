import React from 'react'
import Hero from "../components/hero"
import Projects from '../components/projects'
import WhoWeAre from '../components/whoWeAre'
import Footer from '../components/footerComponent'
import HomePage from './Dummy'
import WhatWeDo from '../components/WhatWeDo'
const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
     
    </>
  )
}

export default Home