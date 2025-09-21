import React, { useState } from 'react'
import './News.css'
import news from '../../assets/ol.png'

const Add_News = () => {
  const [newsData, setNewsData] = useState({
    title: '',
    description: '',
    date: '',
    author: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewsData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('News data:', newsData);
    // Add your submit logic here
    alert('News added successfully!');
  };

  const handleReset = () => {
    setNewsData({
      title: '',
      description: '',
      date: '',
      author: '',
      image: null
    });
    // Reset file input
    const fileInput = document.getElementById('news-image');
    if (fileInput) fileInput.value = '';
  };
  return (
    <div className='News' id='add_news'>
      
      <div className="news-main">
        <div className="title">
          <h1>Today's Hot Topic</h1>
          <div className="meta-info">
            <p className="date">September 17, 2024</p>
            <p className="author">By Admin</p>
          </div>
        </div>
        <div className="image">
          <a href={news} target='_blank' ><img src={news} alt="Today's hot news" /></a>
        </div>
        <div className="description">
          <p>
            Welcome to our school news section! Stay updated with the latest happenings,
            events, and achievements in our school community. From academic excellence
            to extracurricular activities, we bring you all the important updates.
          </p>
          <p>
            Today we're highlighting the upcoming events and celebrating recent
            achievements of our students and faculty members.
          </p>
        </div>
      </div>

      <div className="news-old">
        <div className="news-filter">
          <h2>Add New News</h2>
          <form onSubmit={handleSubmit} className="add-news-form">
            <div className="form-group">
              <label htmlFor="news-title">Title:</label>
              <input
                type="text"
                id="news-title"
                name="title"
                value={newsData.title}
                onChange={handleInputChange}
                placeholder="Enter news title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="news-description">Description:</label>
              <textarea
                id="news-description"
                name="description"
                value={newsData.description}
                onChange={handleInputChange}
                placeholder="Enter news description"
                rows="4"
                required
              />
            </div>

            <div className="date-filters">
              <div className="from-date">
                <label htmlFor="news-date">Date:</label>
                <input
                  type="date"
                  id="news-date"
                  name="date"
                  value={newsData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="to-date">
                <label htmlFor="news-author">Author:</label>
                <input
                  type="text"
                  id="news-author"
                  name="author"
                  value={newsData.author}
                  onChange={handleInputChange}
                  placeholder="Enter author name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="news-image">Image:</label>
              <input
                type="file"
                id="news-image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="clear-filter submit-btn">
                Add News
              </button>
              <button type="button" className="clear-filter reset-btn" onClick={handleReset}>
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add_News 