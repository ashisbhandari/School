import React from 'react'
import './Contact.css'
import cartoon from '../../assets/cartoon-cnt.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-left">
        <img src={cartoon} alt="Contact illustration" />
      </div>
      
      <div className="contact-center">
        <h2>Get In Touch</h2>
        <form className="contact-form">
          <label htmlFor="sender-name">Name</label>
          <input type="text" name="sender-name" id="sender-name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" required />
          
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            placeholder='Your message here...'
            rows="5"
            required
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
      
      <div className="contact-right">
        <h3>Contact Information</h3>
        
        <div className="contact-info">
          <div className="info-item">
            <h4>School Email</h4>
            <p>info@school.edu.np</p>
          </div>
          
          <div className="info-item">
            <h4>Contact Number</h4>
            <p>+977 023-123456 / 023-987654</p>
          </div>
          
          <div className="info-item">
            <h4>Location</h4>
            <p>Bhadrapur, Koshi Province<br />Nepal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact