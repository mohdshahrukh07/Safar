import React from 'react'
import './contact.css'
import Linkstrip from '../Linkstrip/Linkstrip'
function Contact() {
  return (
    <div>
      <Linkstrip Pagename="Contact Us" ComponentName="Contact Us" />
      <div className="contact-container">
        <div className="contact-cards">

        </div>
        <div className="contact-Dbox">
          <div className="Dbox-img">
            <img src="http://demoapus-wp1.com/travlio/wp-content/uploads/2020/09/about.png" alt="" />
          </div>
          <div className="contact-details">
            <form className='contact-form'>
              <div className="mb-3 msgr-name">
                <label htmlFor="your Name" className="form-label">Your Name</label>
                <input type="text" name="yourname" className='form-control' placeholder='Your Name' id="your-name" required />
              </div>
              <div className="mb-3 msgr-email">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" autoComplete="yourname" placeholder='Email' className="form-control" id="postemail" required />
              </div>
              <div className="mb-3 msgr-subject">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" name="subject" className='form-control' placeholder='Subject' id="subject" required />
              </div>
              <div className="mb-3 msgr-mgs">
                <label htmlFor="messages" className="form-label">Your Messages</label>
                <textarea className="form-control" placeholder='Message...' id="exampleFormControlTextarea1"cols="40" rows="7" area-aria-invalid='false' required/>
              </div>
              <div className="mgs-btn-box">
            <button type='submit' className="msg-btn">Send Messages</button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
