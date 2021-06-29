import React from 'react';
import  '../assets/css/app.css';
import Logo from '../assets/img/logo.png';

function Header() {
  return(
    <div>
      <nav className="d-flex topNav ">
        <div className="logoContainer"><a href="/"><img src={Logo} alt="logo"/></a></div>
        <div className="flex-grow-1"></div>
        <div>
          <ul>
            <li> <a href="#ABOUT-US" >ABOUT US</a></li>
            <li> <a href="#STORIES">STORIES</a></li>
            <li> <a href="#CONTACT">CONTACT</a></li>
            <li> <a href="#LOG-IN">LOG IN</a></li>
          </ul>
        </div>
        <div><button href="#" className="btn btnSm btnOR">SIGN UP</button></div>
      </nav>
      <div className="d-flex justify-content-center subNav">
        <ul>
          <li> <a href="#ABOUT-US" >MARKETPLACE</a></li>
          <li> <a href="#ABOUT-US" >WHOLESALE CENTER</a></li>
          <li> <a href="#ABOUT-US" >SELLER CENTER</a></li>
          <li> <a href="#ABOUT-US" >SERVICES</a></li>
          <li> <a href="#ABOUT-US" >INTERNSHIPS</a></li>
          <li> <a href="#ABOUT-US" >EVENTS</a></li>
        </ul>
      </div>
      {/* End Sub Nav */}
  </div>
  )
}
export default Header;