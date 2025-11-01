import Navbar from './components/navbar'
import { Routes,Route,Router } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
    
      <Navbar />
    
         <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      
    </>
  )
}

export default App
