import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import './responsive.css'
// import './pages/color.css'
import HomePage from './landing_page/Home/HomePage'
import AboutPage from './landing_page/About/AboutPage.jsx';

import PricingPage from './landing_page/Pricing/PricingPage'
import ProductPage from './landing_page/Product/ProductPage'
import SignupPage from './landing_page/Signup/SignupPage.jsx'

import Signup from './pages/mdb.jsx'
import SupportPage from './landing_page/Support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import PageNotfound from './landing_page/PageNotfound.jsx'
// import './pages/Signup.css';


function AppRouter() {
  const location = useLocation()
  const hideChrome = location.pathname === '/signup_auth'
  return (
    <>
      {!hideChrome && <Navbar/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        
        <Route path="/signup_auth" element={<Signup/>} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
      {!hideChrome && <Footer/>}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  
  </StrictMode>
)
