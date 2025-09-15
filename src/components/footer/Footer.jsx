import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer class="text-white text-center text-md-start">
    <div class="container" id="footer">
      <div class="row align-items-start gy-4">
        <div class="col-md-3 d-none d-md-block">
          <h5 class="text-uppercase mb-3">@Bhandu's Academy</h5>
          <p class="small description mb-0">
            Welcome to Bhandu's Academy, proudly established in Haldiss with the mission to provide quality education to all.  
            Our academy is dedicated to fostering a supportive and inspiring learning environment where students can grow academically and personally.  
            We believe that education is the key to unlocking potential and shaping a brighter future for our community.  
            Join us on this journey of knowledge, growth, and success.
          </p>
        </div>

        <div class="col-md-3 col-4">
          <h6 class="text-uppercase mb-3">Contact Us</h6>
          <a href="tel:+9779800000000">
            <i class="fa-solid fa-phone contact-icon"></i> +977 9800000000
          </a><br />
          <a href="tel:+9779800000000">
            <i class="fa-solid fa-phone contact-icon"></i> +977 9800000000
          </a><br />
          <a href="mailto:bhandumail@gmail.com">
            <i class="fas fa-envelope icn contact-icon"></i> bhandumail@gmail.com
          </a>
        </div>

        <div class="col-md-3 col-4">
          <h6 class="text-uppercase mb-3">Follow Us</h6>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i class="fa-brands fa-facebook"></i>
            </a><br />
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i class="fa-brands fa-twitter"></i>
            </a><br />
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div class="col-md-3 col-4">
          <h6 class="text-uppercase mb-3">Quick Links</h6>
          <div class="quick-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Notice</a>
            <a href="#">Contact Us</a>
            <a href="#">Image</a>
          </div>
        </div>
        
      </div>

      <hr class="mt-4" />

      <p class="small text-center text-muted mb-0">&copy; {{ year }} Bhandu's Academy. All Rights Reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer
