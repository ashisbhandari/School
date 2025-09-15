import React from 'react';
import './About.css';
import { Facebook, Twitter, Mail, Users, Calendar, Award } from 'lucide-react';
import principal from "../../assets/principal.jpg";

const About = () => {
  
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Main Content Box */}
        <div className="main-content-box">
          {/* Left Column - Principal */}
          <div className="left-column">
            <div className="principal-section">
              <div className="principal-card">
                <div className="principal-image">
                  <img src={principal} alt="Principal" />
                </div>
                <div className="principal-info">
                  <h2>Dr. Ashish Bhandari</h2>
                  <p className="principal-title">Principal</p>
                  <div className="social-links">
                    <a href="#" className="social-link facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="social-link twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="social-link email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Leadership Team */}
            <div className="team-section">
              <h3 className="section-title">Leadership Team</h3>
              <div className="team-grid">
                {[
                  { name: "Michael Chen", role: "Vice Principal - Academics", image:{principal} },
                  { name: "Emily Rodriguez", role: "Vice Principal - Administration", image:{principal} },
                  { name: "James Wilson", role: "Vice Principal - Student Affairs", image: "../../assets/principal.jpg" }
                ].map((member, index) => (
                  <div key={index} className="team-member">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <h4>{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <div className="member-social">
                      <a href="#" className="social-icon"><Facebook size={16} /></a>
                      <a href="#" className="social-icon"><Twitter size={16} /></a>
                      <a href="#" className="social-icon"><Mail size={16} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="description-section">
              <div className="description-content">
                <h3>Shaping Bright Futures</h3>
                <p>
                  We provide quality education, discipline, and opportunities for every student 
                  to grow academically, socially, and personally. Our commitment to excellence 
                  ensures that each student receives the support they need to reach their full potential.
                </p>
                <p>
                  Join us in building a brighter tomorrow through innovative teaching methods, 
                  comprehensive student support, and a nurturing learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;