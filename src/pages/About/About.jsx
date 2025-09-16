import React from 'react';
import './About.css';
import { Facebook, Twitter, Mail } from 'lucide-react';
// Import your actual image
import principal from "../../assets/principal.jpg";
const About = () => {
  // Replace with your actual image import
  // const principal = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
  
  // const teamMembers = [
  //   { 
  //     name: "mr someone", 
  //     role: "Vice Principal - Academics", 
  //     image:"../../assets/principal.jpg"
  //   },
  //   { 
  //     name: "mr bhandari", 
  //     role: "Vice Principal - Administration", 
  //     image: "../../assets/principal.jpg"
  //   },
  //   { 
  //     name: "mr ashish", 
  //     role: "Vice Principal - Student Affairs", 
  //     image: "../../assets/principal.jpg"
  //   }
  // ];
  const teamMembers = [
  { name: "mr someone", role: "Vice Principal - Academics", image: principal },
  { name: "mr bhandari", role: "Vice Principal - Administration", image: principal },
  { name: "mr ashish", role: "Vice Principal - Student Affairs", image: principal }
];

  return (
    <div className="about-container" id='about'>
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
                    <a href="#" className="social-link facebook" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="social-link twitter" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="social-link email" aria-label="Email">
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
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-member">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <h4>{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <div className="member-social">
                      <a href="#" className="social-icon" aria-label="Facebook">
                        <Facebook size={16} />
                      </a>
                      <a href="#" className="social-icon" aria-label="Twitter">
                        <Twitter size={16} />
                      </a>
                      <a href="#" className="social-icon" aria-label="Email">
                        <Mail size={16} />
                      </a>
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