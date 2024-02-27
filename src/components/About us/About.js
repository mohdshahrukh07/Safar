import React from 'react'
import './about.css'
import Linkstrip from '../Linkstrip/Linkstrip'
function About() {
  return (
    <div>
      <Linkstrip Pagename="About Us" ComponentName="About Us"/>
      <div className="about-container">
        <div className="our-img">
          <img src="https://www.basharibrahim.com.au/wp-content/uploads/2020/07/Woman-Travelling-Alone.jpg" alt="tour-img" />
        </div>
        <div className="about-box">
          <div className="heading-line">Our Company</div>
          <h1>Mission Statement</h1>
          <div className="about-para">
            <p>Safar is the Organized Adventure Platform, offering the India’s largest selection of multi-day organized adventures in All over India. Safar’s intuitive online platform seamlessly connects travelers and travel agents with 2,500+ multi-day operators, offering 5000+ adventures in more than 200 Cities in all over India.</p>
            <p>With offices in Delhi, bengalore, and Jaipur, Safar’s travel experts are available online 24/7 to support the entire booking and travel experience. Safar promotes environmentally sustainable travel by enabling all travelers to view and offset the carbon impact of their adventures, and the company works tirelessly with local operators to help protect and strengthen the communities that benefit from adventure tourism.</p>
          </div>
        </div>
      </div>
      <div className="team-heading-container">
        <h1>Meet Our Team</h1>
        <div className='team-heading'>Professional & Dedicated Team</div>
      </div>
      <div className="team-container">
        <div className="members-box">
          <div className="members-img">
            <img src="https://packarddental.com/wp-content/uploads/sites/15/2023/05/Content-05.jpg" alt="team member" />
          </div>
          <div className="member-details">
            <h2>Peter Jaction</h2>
            <div className='member-title'>Co Founder</div>
            <div className="media-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          </div>
        <div className="members-box">
          <div className="members-img">
          <img src="https://www.emplova.com/wp-content/uploads/2023/04/iStock-1365606632.jpg" alt="team member" />
          </div>
          <div className="member-details">
            <h2>Deanna Rose</h2>
            <div className='member-title'>Content Writer</div>
            <div className="media-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          </div>
        <div className="members-box">
          <div className="members-img">
          <img src="https://img.freepik.com/premium-photo/portrait-smiling-young-black-man-posing-couch-home_116547-34160.jpg" alt="team member" />
            </div>
            <div className="member-details">
            <h2>Lori Ramos</h2>
            <div className='member-title'>Marketing</div>
            <div className="media-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
            </div>
      </div>
    </div>
  )
}

export default About
