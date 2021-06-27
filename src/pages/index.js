import React, { useState } from 'react';

import  '../assets/css/app.css';
import Logo from '../assets/img/logo.png';
import BannerImg from '../assets/img/1.png';
import LadiesImg from '../assets/img/2.png';
import LadyImg from '../assets/img/4.png';
// import BgImg from '../assets/img/bg1.png';
import BtnImg from '../assets/img/3.png';
import Btn2Img from '../assets/img/5.png';
import P1Img from '../assets/img/p1.png';
import P2Img from '../assets/img/p2.png';
import P3Img from '../assets/img/p3.png';
import P4Img from '../assets/img/p4.png';
import P5Img from '../assets/img/p5.png';
import P6Img from '../assets/img/p6.png';
import PhoneImg from '../assets/img/phone.png';
import Fb from '../assets/img/fb.png';
import Ig from '../assets/img/ig.png';
import Tw from '../assets/img/tw.png';
import In from '../assets/img/in.png';
import Fed from '../assets/img/f1.png';

function Home() {
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [story, setStory] = useState()
  const [location, setLocation] = useState()
  const [user, setUser] = useState()
  const [show, setShow] = useState(false)
  // const [vendor, setVendor] = useState()
  const [theArray, setTheArray] = useState([]);

  const addEntryClick = () => {
    setShow(true)
    setTheArray([...theArray, 
      { Fname:firstname,
        Lname:lastname,
        Story:story,
        User:user,
        Location:location
      }
    ]);
    
  };

  const closeEntryClick = () => {
    setShow(false)
  };
  return (
    <div className="mainContainer">
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
      {/* End Main Nav */}
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
      <div className="container-fluid bg-dark pt-5">
        <div className="row appContainer ">
        <div className="col-lg-7  full-section-img p-5"><img src={LadiesImg} alt="Img"/></div>
          <div className="col-lg-5 color-white B-StoryContent bg-dark">
            <div className="captionTex textMd">
            Tolu & Joy’s Experience
            </div>
            <div className="mt-3"> <span className="tag tag-outline">CUSTOMER</span></div>
            <div className="captionBody mt-3 mb-5">
            I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
            </div>
            <button className="btn"><img src={BtnImg} className="btnImg mb-5" alt="button" data-bs-toggle="modal" data-bs-target="#exampleModal"/></button>
          </div>
        </div>
      </div>
      {/*End Full Width Story Section */}

      <div className="container-fluid pt-5 pb-5  bg-white overlap-c">
        <div className="row appContainer text-left mt-5 ">
          {theArray.length === 0 ? 
          <div><h1 className="color-light text-center">No Story Found </h1></div> :
            
        
          theArray.map(entry =>
          
            <div className="col-lg-4 pb-3 mb-3 card mb-5" > 
            {/* { (entry.User==="cutomer") ? { display:'block'} : {display : 'none'} }  */}
              <div className="personImg text-left"> <img src={P1Img} alt="person"/></div>
              <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">{entry.Fname} {entry.Lname}</span></div>
              <div><span >In {entry.Location}</span> <span className="tag tag-fill bg-ligh-blue color-dark-blue m-4">{entry.User}</span> </div>
              <div className="mt-3">
              {entry.Story}
              </div>
            </div>
          )
            }

        </div>
      </div>
      {/* End Person List */}
      
      <div className="container-fluid bg-light-orange pt-5">
        <div className="row appContainer ">
        <div className="col-lg-7  full-section-img p-5 Mobile">
              <img src={LadyImg} alt="Img"/>
              {/* <img src={BgImg} className="bgImg" alt="Img"/> */}
            </div>
          <div className="col-lg-5 color-dark B-StoryContent">
            
            <div className="captionTex textMd">
            Josiah’s Experience
            </div>
            <div className="mt-3"> <span className="tag tag-outline-v color-dark-orange">VENDOR</span></div>
            <div className="captionBody mt-3 mb-5">
            I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
            </div>
            
            <button className="btn"><img src={Btn2Img} className="btnImg mb-5" alt="button" data-bs-toggle="modal" data-bs-target="#exampleModal"/></button>
          </div>
            <div className="col-lg-7  full-section-img p-5 Large">
              <img src={LadyImg} alt="Img"/>
              {/* <img src={BgImg} className="bgImg" alt="Img"/> */}
            </div>
        </div>
      </div>
      {/*End Full Width Story Section */}

      <div className="container-fluid pt-5 pb-5  bg-white overlap-v mb-4">
        <div className="row appContainer text-left mt-5 pt-3">
          <div className="col-lg-4 pb-3 mb-4 card mb-5">
            <div className="personImg text-left"> <img src={P1Img} alt="person"/></div>
            <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">Joseph Ike</span></div>
            <div><span >In Ikeja</span> <span className="tag tag-fill bg-ligh-blue color-dark-blue m-4">CUSTOMER</span> </div>
            <div className="mt-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </div>
          </div>

          <div className="col-lg-4 pb-3 mb-4 card mb-5">
            <div className="personImg text-left"> <img src={P2Img} alt="person"/></div>
            <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">Adetola Fashinas</span></div>
            <div><span >Ibadan</span> <span className="tag tag-fill bg-ligh-blue color-dark-blue m-4">CUSTOMER</span> </div>
            <div className="mt-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </div>
          </div>

          <div className="col-lg-4 pb-3 mb-4 card mb-5">
            <div className="personImg text-left"> <img src={P3Img} alt="person"/></div>
            <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">Emmanuel Fayemi </span></div>
            <div><span >In Akoka</span> <span className="tag tag-fill bg-ligh-blue color-dark-blue m-4">CUSTOMER</span> </div>
            <div className="mt-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </div>
          </div>

          
          <div className="col-lg-4 pb-3 mb-4 card mb-5">
            <div className="personImg text-left"> <img src={P4Img} alt="person"/></div>
            <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">Chisom Obilor </span></div>
            <div><span >In Akoka</span> <span className="tag tag-fill bg-ligh-green color-dark-green m-4">VENDOR</span> </div>
            <div className="mt-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </div>
          </div>

          
          <div className="col-lg-4 pb-3 mb-4 card mb-5">
            <div className="personImg text-left"> <img src={P5Img} alt="person"/></div>
            <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">Adunoluwa Adeyemi </span></div>
            <div><span >In Akoka</span> <span className="tag tag-fill bg-ligh-green color-dark-green m-4">VENDOR</span> </div>
            <div className="mt-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </div>
          </div>

          
          <div className="col-lg-4 pb-3 mb-4 card mb-5">
            <div className="personImg text-left"> <img src={P6Img} alt="person"/></div>
            <div className="personName mb-1 mt-4 mb-3"> <span className="textMd-s">Chidi Okeke </span></div>
            <div><span >In Akoka</span> <span className="tag tag-fill bg-ligh-green color-dark-green m-4">VENDOR</span> </div>
            <div className="mt-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </div>
          </div>

        </div>
      </div>
      {/* End Person List */}

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
      {/* End Footer Section */}

      {/* Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          {
            show=== true ?  
            <div class="modal-content pb-2">
              <div class="modalHeader">
              </div>
              <div class="modal-body tellStroyForm p-4">
                <div className="row">
                  <div className="col-12 feedback text-center">
                  <img src={Fed} alt="Img"/>
                  <div className="textMd-s color-dark mb-3"> Thank you <br/>for sharing your story!</div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </div>
                </div>
                <div class=" text-center mt-4 mb-4">
                  <button type="button" class="btn btnMd-x  btnOR" data-bs-dismiss="modal" onClick={closeEntryClick}>Close</button>
                </div>
              </div>
            </div>    
            : 
          <div class="modal-content">
            <div class="modalHeader">
              Share your amazing story!
            </div>
            <div class="modal-body tellStroyForm p-4">
              <div className="row">
              <div className="col-lg-12 mt-2">
                <span className="textSm-s color-gray">Upload your Picture</span><br/>
                <input class="form-control " type="file" ></input>
                
              </div>
                <div className="col-lg-6 mt-4">
                  <span className="textSm-s color-gray">First Name</span><br/>
                  <input type="text" onChange={(e)=> setFirstname(e.target.value)}/>
                </div>
                <div className="col-lg-6 mt-4">
                  <span className="textSm-s color-gray">Last Name</span><br/>
                  <input type="text" onChange={(e)=> setLastname(e.target.value)}/>
                </div>
                <div className="col-lg-12 mt-4">
                  <span className="textSm-s color-gray">Share your story</span><br/>
                  <textarea class="" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setStory(e.target.value)}></textarea>
                </div>

                <div className="col-lg-12 mt-2">
                  <span className="textSm-s color-gray ">What did you interact with Vasiti as?</span>
                  <span>
                    <input class=" radio-btn m-3" type="radio" value="customer" name="user"  onChange={(e)=> setUser(e.target.value)}/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Customer
                    </label>
                  </span>
                  <span>
                    <input class=" radio-btn m-3" type="radio"  name="user" value="vendor" onChange={(e)=> setUser(e.target.value)}/>
                    <label class="form-check-label" >
                    Vendor
                    </label>
                  </span>
                  
                </div>
                <div className="col-lg-12 mt-3">
                  <span className="textSm-s color-gray">City or Higher Institution (for Students)</span><br/>
                  <input type="text" onChange={(e)=> setLocation(e.target.value)}/>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bg-dark color-white btnMd-x" data-bs-dismiss="modal">Close</button>
              <button type="button"   class="btn btnMd-x  btnOR" onClick={addEntryClick}>Share your story! </button>
            </div>
          </div>
          }
        
        </div>
      </div>

    </div>
  );
}

export default Home;
