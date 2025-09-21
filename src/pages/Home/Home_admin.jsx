import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../../components/footer/Footer'
import News from '../News/News'
import Gallery from '../Gallery/Gallery'
import Academic from '../Academic/Academic'
import Add_News from '../News/ADD_News'
import Contact_Admin from '../Contact/Contact_admin'
const Home_Admin = () => {
  return (
    <>
    <Header />
    <Add_News />
    {/* <Contact_Admin /> */}
    </>
  )
}

export default Home_Admin
