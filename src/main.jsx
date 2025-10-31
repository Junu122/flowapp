import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/normalize.css"
import "./assets/css/vendor.css"
import "./assets/style.css"
import "../public/icomoon/icomoon.css"
import App from './App.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>,
)
