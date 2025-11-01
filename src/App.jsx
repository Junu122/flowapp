import Navbar from './components/navbar'
import { Routes,Route,useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/footerComponent'
import Services from './pages/Services'
function App() {
  const location = useLocation();
  return (
    <>
     <Preloader trigger={location.pathname} />
      <Navbar />
    
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      
    </>
  )
}

export default App
