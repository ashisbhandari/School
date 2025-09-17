import React, { useState } from 'react'
import './News.css'
import news from '../../assets/ol.png'

const News = () => {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const oldNews = [
    {
      id: 1,
      title: "Annual Sports Day Celebration",
      date: "2024-09-15",
      author: "John Doe",
      image: news
    },
    {
      id: 2,
      title: "New Computer Lab Inauguration",
      date: "2024-09-10",
      author: "Mike Johnson",
      image: news
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Schedule",
      date: "2024-09-08",
      author: "Sarah Wilson",
      image: news
    }
  ]

  const filteredNews = oldNews.filter(item => {
    if (!fromDate && !toDate) return true
    const itemDate = new Date(item.date)
    const from = fromDate ? new Date(fromDate) : null
    const to = toDate ? new Date(toDate) : null

    if (from && to) return itemDate >= from && itemDate <= to
    if (from) return itemDate >= from
    if (to) return itemDate <= to
    return true
  })

  return (
    <div className='News' id='news'>
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
          <h2>Previous News</h2>
          <div className="date-filters">
            <div className="from-date">
              <label htmlFor="from-date">From Date:</label>
              <input
                type="date"
                id="from-date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="to-date">
              <label htmlFor="to-date">To Date:</label>
              <input
                type="date"
                id="to-date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <button
              className="clear-filter"
              onClick={() => {
                setFromDate('')
                setToDate('')
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="news-list">
          {filteredNews.map(item => (
            <div key={item.id} className="news-topics">
              <div className="img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="title">
                <h3>{item.title}</h3>
                <p className="meta">{item.date} → {item.author}</p>
              </div>
            </div>
          ))}

          {filteredNews.length === 0 && (
            <div className="no-news">
              <p>No news found for the selected date range.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default News 