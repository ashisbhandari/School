import React from 'react'
import './Header.css'
// import Contact from '../../pages/Contact/Contact'

const Header = () => {
  return (
    <div className="header">
      <div className="header-name-center">
        Welcome! <br /> Our School
      </div>

      <div className="overlay"></div>

      <div className="header-contents">
        <h1>Shaping Bright Futures</h1>
        <p>
          We provide quality education, discipline, and opportunities for every student 
          to grow academically, socially, and personally. Join us in building a brighter tomorrow.
        </p>
        <div className="btn-group">
          <button onClick={()=>{
            document.getElementById("gallery").scrollIntoView();
          }}>View Gallery</button>
          <button className="secondary-btn" onClick={()=>{
            document.getElementById('contact').scrollIntoView();
          }
          }>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Header
