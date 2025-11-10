import React from 'react'
import ServiceList from '../components/services/ServiceList'
import ArchitecturalProcess from '../components/services/ArchitecturalProcess'
import ServiceHero from '../components/services/ServiceHero'

const Services = () => {
    return (
        <>  
            <ServiceHero />
            <ServiceList />
            <ArchitecturalProcess />
            
        </>
    )
}

export default Services