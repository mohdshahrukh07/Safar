import React from 'react'
import secImg from '../images/logo2.png'
// import { Link } from 'react-router-dom';
import './FooterStyle.css';
function Footer() {
  return (
    <div>
      <div className="main-box">
        <div className="notifcation">
          <h2>Get New Jobs Notification!</h2>
          <p>Subscribe & get all related jobs notification.</p>
        </div>
        <div className="input-group ">
          <input type="text" className="form-control" placeholder="Enter your Email.." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary mail-btn" type="button" id="button-addon2">Subscribe</button>
        </div>
      </div>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <div className="footer-elements">
              <div className="element-item">
                <div className="footer-items">
                  <div className="logo">
                    <a href="/">
                      <span>
                        <img src={secImg} alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="element-item">
                <div className="element-email">
                  <div className="element-title">Email:</div>
                </div>
              </div>
              <div className="element-item">
                <div className="element-item-name">
                  safartravel@gmail.com
                </div>
              </div>
              <div className="element-item">
                <div className="element-call">
                  <div className="element-title">
                    Call:
                  </div>
                </div>
              </div>
              <div className="element-item">
                <div className="element-item-name">
                  +91 823 634 4321
                </div>
              </div>
              <div className="footer-links">
                <div className="element-item">
                  <div className="social-media-icons">
                    <div className="link-icons">
                      <a href="/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="link-icons">
                      <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </div>
                    <div className="link-icons">
                      <a href="/">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                    <div className="link-icons">
                      <a href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-elements">
              <div className="elements-box">
                <h3 className="links-title">
                  Quick Links
                </h3>
                <div className="links-container">
                  <ul className="links-menu">
                    <li className="links-name">
                      <a href="/">About</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Content</a>
                    </li>
                    <li className="links-name">
                      <a href="/">My Account</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Confirmation</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-elements">
              <div className="elements-box">
                <h3 className="links-title">
                  Categories
                </h3>
                <div className="links-container">
                  <ul className="links-menu">
                    <li className="links-name">
                      <a href="/">Travel</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Lifestyle</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Fashion</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Destinations</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Food & Drink</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-elements">
              <div className="elements-box">
                <h3 className="links-title">
                  Usefull Links
                </h3>
                <div className="links-container">
                  <ul className="links-menu">
                    <li className="links-name">
                      <a href="/">Tour</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Events</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Hostal</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Car</a>
                    </li>
                    <li className="links-name">
                      <a href="/">Hotel</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="footer-elements">
              <div className="elements-box">
                <h3 className="links-title">
                  Download Apps
                </h3>
              </div>
              <div className="google-play-link">
                <div className="link-btn">
                  <h3 className="btn-title">
                    <a href="/">
                      <span className="store-app">
                        <span className="btn-logo">
                          <i className="fa-brands fa-android"></i>
                        </span>
                        <span className="btn-name">
                          Google Play
                          <span>
                            Get It Now
                          </span>
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
              <div className="google-play-link">
                <div className="link-btn">
                  <h3 className="btn-title">
                    <a href="/">
                      <span className="store-app">
                        <span className="btn-logo">
                          <i className="fa-brands fa-apple"></i>
                        </span>
                        <span className="btn-name">
                          App Store
                          <span>
                            Now It Available
                          </span>
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
