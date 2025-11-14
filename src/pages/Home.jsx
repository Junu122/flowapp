import React from 'react'
import Hero from "../components/hero"
import Projects from '../components/projects'
import WhoWeAre from '../components/whoWeAre'
import WhatWeDo from '../components/WhatWeDo'
import Cta from '../components/cta/Cta'
import StatusSection from '../components/status-section/StatusSection'
const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <WhatWeDo />
      <WhoWeAre />
      {/* <StatusSection /> */}
      
      
      <Cta />
     
    </>
  )
}

export default Home