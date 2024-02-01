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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti harum sapiente obcaecati eius placeat quidem asperiores at quisquam magni! Eligendi impedit veniam blanditiis fugiat illum cumque enim nisi error vitae!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate perspiciatis reprehenderit nemo fugit rerum quas aliquid veritatis ex!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos velit architecto cupiditate illo explicabo vero minima cumque sunt expedita iste vitae aperiam quisquam, repudiandae inventore eius. Veniam at cum est.</p>
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
