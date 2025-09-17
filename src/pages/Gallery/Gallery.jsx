import React from 'react'
import './Gallery.css'
import img from '../../assets/ol.png'
import cartoon from '../../assets/cartoon-cnt.png'

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
      <img src={img} alt="hii" />
      <img src={cartoon} alt="hello" />
    </div>
  )
}

export default Gallery
