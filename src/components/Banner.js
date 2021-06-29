import React from 'react';
import  '../assets/css/app.css';
import BannerImg from '../assets/img/1.png';

function Header() {
  return(
    <div>
      <div className="container appContainer ">
        <div className="row">
          <div className="col-lg-5 bannerText ">
            <div className="textLg color-black ">
              Amazing<br></br>
              Experiences from Our Wonderful Customers
            </div>
            <div className="textSm color-gray pt-4">Here is what customers and vendors are saying about us, you can share your stories with us too.</div>
          </div>
          <div className="col-lg-7 bannerImg pt-5">
            <img src={BannerImg} alt="Img"/>
          </div>
        </div>
      </div>
      {/* End Banner Section */}
  </div>
  )
}
export default Header;