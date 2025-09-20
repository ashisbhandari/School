import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
