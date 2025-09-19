import React from 'react'
import './Gallery.css'
import img from '../../assets/ol.png'
import cartoon from '../../assets/cartoon-cnt.png'

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
      <div className="title text-center">
        <p>Explore more photos or videos through Album</p>
      </div>

      <div className="album-container">
        <div className="album-item">
          <div className="album-image-wrapper">
            <img src={img} alt="Awards album" />
            <div className="album-overlay">
              <span> View Album</span>
            </div>
          </div>
          <p className="album-title">Awards</p>
        </div>

        <div className="album-item">
          <div className="album-image-wrapper">
            <img src={img} alt="Events album" />
            <div className="album-overlay">
              <span>View Album</span>
            </div>
          </div>
          <p className="album-title">Events</p>
        </div>

        <div className="album-item">
          <div className="album-image-wrapper">
            <img src={img} alt="Memories album" />
            <div className="album-overlay">
              <span>View Album</span>
            </div>
          </div>
          <p className="album-title">Memories</p>
        </div>
      </div>
      

    </div>
  )
}

export default Gallery