import React from 'react';
import  '../assets/css/app.css';
import PhoneImg from '../assets/img/phone.png';
import Fb from '../assets/img/fb.png';
import Ig from '../assets/img/ig.png';
import Tw from '../assets/img/tw.png';
import In from '../assets/img/in.png';

function Footer() {
  return(
    <div className="container-fluid bg-mid-night pt-5 pb-5">
      <div className="row appContainer ">
        <div className="col-lg-6 text-center">
        <img src={PhoneImg} className="footerPhone" alt="app"/>
        </div>
        <div className="col-lg-5 text-left pt-2 color-white ">
          <div className="textLg-s">Be a  member of our community 🎉</div>
          <div className="textSm-s">We’d make sure you’re always first to know what’s happening on  Vasiti—thus, the world.</div>
          <div className="mt-4">
            <span className="inputContainer" > 
              <input type="text" placeholder="enter your email address"/>
              <button className="btn bg-white btnSm" >SUBSCRIBE</button>
            </span>
          </div>
        </div>
      </div>
      <div className="row appContainer mt-5 pt-5 color-white footerLink">
          <div className="col-lg-2 col-6 mb-3">
          <span className="TitleMd"> Company</span>
          <div className="mt-4 ">
            <a href="#about"> About us</a><br/>
            <a href="#about"> Term of Use</a><br/>
            <a href="#about"> Privacy Policy</a><br/>
            <a href="#about"> Press & Media</a><br/>
          </div>
          </div>
          <div className="col-lg-2 col-6 mb-3">
            <span className="TitleMd"> Products</span>
            <div className="mt-4 ">
              <a href="#about">Marketplace</a><br/>
              <a href="#about">Magazine</a><br/>
              <a href="#about">Seller</a><br/>
              <a href="#about"> Wholesale</a><br/>
              <a href="#about">Services</a><br/>
            </div>
          </div>
          <div className="col-lg-2 col-6 mb-3">
            <span className="TitleMd"> Careers</span>
            <div className="mt-4 ">
              <a href="#about">Become a Campus Rep</a><br/>
              <a href="#about">Become a Vasiti Influencer</a><br/>
              <a href="#about">Become a Campus writer</a><br/>
              <a href="#about"> Become an Affiliate</a><br/>
            </div>
          </div>
          <div className="col-lg-2 col-6 mb-3">
            <span className="TitleMd"> Get in touch</span>
            <div className="mt-4 ">
              <a href="#about">Contact us</a><br/>
              <a href="#about">Partner with us</a><br/>
              <a href="#about">Advertise with us</a><br/>
              <a href="#about"> Help/FAQs</a><br/>
            </div>
          </div>
          <div className="col-lg-2 col-6 mb-3">
            <span className="TitleMd"> Join our community</span>
            <div className="socialIcon mt-4">
              <sanp> <a href="#social"><img src={Fb} className="btnImg mb-3" alt="social"/></a> </sanp>
              <sanp> <a href="#social"><img src={Ig} className="btnImg mb-3" alt="social"/></a> </sanp>
              <sanp> <a href="#social"><img src={Tw} className="btnImg mb-3" alt="social"/></a> </sanp>
              <sanp> <a href="#social"><img src={In} className="btnImg mb-3" alt="social"/></a> </sanp>
            </div>

            <div className="socialIcon mt-4">
              <sanp><a href="#about"> Email Newsletter</a>  </sanp>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Footer;