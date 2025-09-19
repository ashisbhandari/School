import React from "react";
import "./Academic.css";

const Academic = () => {
  const education = [
    {
      school: "ABC Secondary School",
      degree: "SEE - Science",
      year: "2018 – 2020",
      details: "Focused on Mathematics and Science subjects.",
    },
    {
      school: "XYZ College",
      degree: "+2 in Science",
      year: "2020 – 2022",
      details: "Specialized in Physics, Chemistry, and Computer Science.",
    },
    {
      school: "Tech University",
      degree: "BSc. in Computer Science",
      year: "2022 – Present",
      details: "Learning programming, database systems, and web development.",
    },
  ];

  const achievements = [
    "1st Place – Coding Competition (2023)",
    "Merit Scholarship Award (2022)",
    "Top 5 in Science Fair (2019)"
  ];

  const certifications = [
    "Web Development – Coursera",
    "Python Programming – Udemy",
    "Data Science Workshop – College Event"
  ];

  return (
    <div className="academic-container" id="academic">
      <h2 className="title">🎓 Academic Background</h2>

      <div className="education-section">
        {education.map((edu, index) => (
          <div key={index} className="edu-card">
            <h3>{edu.school}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="year">{edu.year}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>

      <div className="extra-section">
        <h2>🏆 Achievements</h2>
        <ul>
          {achievements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>📜 Certifications</h2>
        <ul>
          {certifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Academic;
