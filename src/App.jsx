import Navbar from './components/navbar'
import { Routes,Route,useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/footerComponent'
import Services from './pages/Services'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import ProjectPage from './pages/ProjectPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
function App() {
  const location = useLocation();
  return (
    <>
     <Preloader trigger={location.pathname} />
     <ScrollToTop />
      <Navbar />
    
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/project" element={<ProjectPage />} />
         <Route path="/project/:projectid" element={<ProjectDetailPage />} />
        
      </Routes>
      <Footer />
      
    </>
  )
}

export default App
