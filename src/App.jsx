import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar_admin from './components/navbar/Navbar-admin'
import Home_Admin from './pages/Home/Home_admin'
function App() {
  const location = useLocation();
  
  // Determine which navbar to show based on current route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
    <div className='app'>
      {isAdminRoute ? <Navbar_admin /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Home_Admin />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
