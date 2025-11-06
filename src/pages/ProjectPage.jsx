import React from 'react'
import ProjectHeader from '../components/projects/ProjectHeader'
import ProjectGrid from '../components/projects/ProjectGrid'
import HeaderContainer from '../components/HeaderContainer'
const ProjectPage = () => {
  return (
    <>
    <HeaderContainer span1={"Our"} span2={"Projects"} para={"DESIGN. VISION. REALITY."}/>
  <ProjectGrid />

   </>
  )
}

export default ProjectPage