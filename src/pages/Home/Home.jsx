import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../../components/footer/Footer'
import News from '../News/News'
import Gallery from '../Gallery/Gallery'
import Academic from '../Academic/Academic'
const Home = () => {
  return (
    <>
    <Header />
    <About />
    <News />
    <Contact />
    <Gallery />
    </>
  )
}

export default Home
