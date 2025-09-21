import React from 'react'
import './Contact-admin.css'

const Contact_Admin = () => {
  return (
    <div className='contact' id='contact'>
      <div className="ok">
        <h1>Let's Explore User Messages</h1>
      </div>
      <table >
        <tr>
          <th>S.N:</th>
          <th>Sender Name</th>
          <th>Sender Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>John Smith</td>
          <td>john.smith@email.com</td>
          <td>Admission Inquiry</td>
          <td>Hello, I would like to know about the admission process for Grade 10. What are the required documents?</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sarah Johnson</td>
          <td>sarah.j@gmail.com</td>
          <td>Fee Structure</td>
          <td>Could you please provide information about the fee structure for different grades? Thank you.</td>
          <td>Replied</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Michael Brown</td>
          <td>m.brown@yahoo.com</td>
          <td>Extracurricular Activities</td>
          <td>What sports and clubs are available for students? My daughter is interested in basketball and drama.</td>
          <td>In Progress</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Emily Davis</td>
          <td>emily.davis@hotmail.com</td>
          <td>School Bus Service</td>
          <td>Is there a school bus service available? If yes, what are the routes and timings?</td>
          <td>Replied</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Robert Wilson</td>
          <td>robert.w@outlook.com</td>
          <td>Academic Calendar</td>
          <td>When does the new academic session start? Could you share the academic calendar for this year?</td>
          <td>Pending</td>
        </tr>
      </table>
      
    </div>
  )
}

export default Contact_Admin