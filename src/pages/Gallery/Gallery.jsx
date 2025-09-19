import React from 'react'
import './Gallery.css'
import img from '../../assets/ol.png'
import cartoon from '../../assets/cartoon-cnt.png'

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
      <div className="title text-center">
        <h1>Gallery</h1>
        <p>click each album to Explore more photo or video</p>
      </div>
      <div className="album">
        <div className="album-left">
          <img src={img} alt="album" />
          <p>Awards</p>
        </div>
        <div className="album-center">
          <img src={img} alt="album" />
          <p>Awards</p>
        </div>
        <div className="album-right">
          <img src={img} alt="album" />
          <p>Awards</p>
        </div>
      </div>

      <img src={img} alt="hii" />
      <img src={cartoon} alt="hello" />
    </div>
  )
}

export default Gallery
