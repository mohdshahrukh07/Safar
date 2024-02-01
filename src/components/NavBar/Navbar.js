import React from 'react';
import firImg from '../images/navlogo.png'
import { Link } from 'react-router-dom';
import './Navstyle.css';
function Navbar() 
  {
    let check=true;
  const showSidebar = () => {
    if(check === true){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    check=false;
  }
  else {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    check=true;
}
  }
  const handleLinks = ()=>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  };

  return (
    <> 
      <nav>
        <ul className="sidebar">
          <li onClick={showSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          </li>
          <li><Link onClick={handleLinks} to="/home">Home</Link></li>
          <li><Link onClick={handleLinks} to="/tour">Tours</Link></li>
          <li><Link onClick={handleLinks} to="/blogs">Blogs</Link></li>
          <li><Link onClick={handleLinks} to="/about">About</Link></li>
          <li><Link onClick={handleLinks} to="/contact">Contact us</Link></li>
          <li><Link onClick={handleLinks} to="/login">Login</Link></li>
        </ul>
        <ul className="onDesktop">
          <li><Link to="/home"><img src={firImg} alt="" /></Link></li>
          <li className="hideOnMobile"><Link to="/home">Home</Link></li>
          <li className="hideOnMobile"><Link to="/tour">Tours</Link></li>
          <li className="hideOnMobile"><Link to="/blogs">Blog</Link></li>
          <li className="hideOnMobile"><Link to="/about">About</Link></li>
          <li className="hideOnMobile"><Link to="/contact">Contact us</Link></li>
          <li className="hideOnMobile"><Link to="/login">Login</Link></li>
          <li className="menu-button" onClick={showSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
