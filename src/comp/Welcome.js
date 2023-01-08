import React from "react";
import "../comp/Welcome.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import Subscribe from "../img/Subscribe.png";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login")
  }
  return (
    // Header
    <div className="header">
      {/*Navbar  */}
      <div className="nav">
        <div className="logo" />
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="navbar-brand">Plans & Pricing</li>
              <li className="navbar-brand">Teach with us</li>
              <li className="navbar-brand">Affiliate Program</li>
              <li className="navbar-brand">Kids</li>
            </ul>
          </div>
        </nav>
        <button className="btn-outer" onClick={handleClick}>
          <div className="btn-inner">
            <i className="fa fa-user" aria-hidden="true"></i>
            <p className="inner-txt">Login</p>
          </div>
        </button>
      </div>
      {/* Navbar Ended */}
      {/* Container 1 Start */}
      <div className="container-1">
        <p className="outer-txt">
          Hone your english speaking skills over <br />
          <span className="spn-txt">one-on-one </span> video call
        </p>
        <p style={{ fontFamily: "Poppins", fontSize: "18px" }}>
          Practice english conversation with excellent communuicators <br />
          across the country and speak like a PRO 😎.
        </p>
      </div>
      {/* Container 1 End */}
      {/* Container 2 Start */}
      <div className="container-2">
        <button className="btn-1">Book a trail</button>
        <button className="btn-2">Download our app</button>
      </div>
      {/*Container 2 End */}

      {/*Stat Section  */}
      <div className="container-3">
        <div className="stat-section">
          <div className="stats-container">
            <div className="frame frame-1">
              <div className="frame-txt-1">
                50K<span style={{ color: "#00cdac" }}>+</span>
                <div className="frame-txt-2">Mobile Downloads</div>
              </div>
            </div>
            <div className="frame frame-2">
              <div className="frame-txt-1">
                80K<span style={{ color: "#00cdac" }}>+</span>
              </div>
              <div className="frame-txt-2">Happy Learners</div>
            </div>
            <div className="frame frame-3">
              <div className="frame-txt-1">
                53K<span style={{ color: "#00cdac" }}>+</span>
              </div>
              <div className="frame-txt-2">Sessions per month</div>
            </div>
            <div className="frame frame-4">
              <div className="frame-txt-1">
                200<span style={{ color: "#00cdac" }}>+</span>
              </div>
              <div className="frame-txt-2" style={{ fontSize: "11.6px" }}>
                Speakers around the globe
              </div>
            </div>
          </div>
          <div className="stat-txt">
            <p className="txt-1">Book a trail</p>
            <p className="txt-2">Start your English speaking journey today!</p>
            <p className="txt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              pellentesque praesent vitae sit sagittis venenatis.
            </p>
          </div>
          <button
            className="btn-1"
            style={{ marginLeft: "55vw", fontSize: "15px" }}
          >
            Book a trail
          </button>
        </div>
      </div>

      {/* Offer Section */}
      <div className="container-4">
        <p className="offer-section">What we offer ?</p>
        <img
          src={img1}
          alt="img1"
          className="offerimg"
          style={{ left: "300px" }}
        />
        <div className="blur-bg" style={{ left: "300px" }}>
          <p className="offer-txt-1">Customised Curriculum</p>
          <p className="offer-txt-2">
            Customised sessions and module for Basic, Intermediate and Advanced
            learners.
          </p>
        </div>
        <img
          src={img2}
          className="offerimg"
          style={{ left: "760px" }}
          alt="img2"
          id="offerimg-2"
        />
        <div className="blur-bg" style={{ left: "760px" }}>
          <p className="offer-txt-1">Experimental Learning </p>
          <p className="offer-txt-2">
            Do not study English, rather consume and use it.
          </p>
        </div>
        <img
          src={img3}
          className="offerimg"
          style={{ left: "1200px" }}
          alt="img2"
          id="offerimg-2"
        />
        <div className="blur-bg" style={{ left: "1200px" }}>
          <p className="offer-txt-1">Shadowing Method</p>
          <p className="offer-txt-2">
            Think and speak in English rather than translating it from mother
            tongue.
          </p>
        </div>
      </div>
      {/* How it works */}
      <p className="work-section">How it works ?</p>
      <div className="container-5">
        <div className="card">
          <div className="card-txt-1">1. Create Account</div>
          <div className="card-txt-2">
            Create your account using phone number or email and take a free
            trial at ₹1.
          </div>
        </div>
        <div className="card">
          <div className="card-txt-1" >2. Subscribe</div>
          <div className="card-txt-2">
          Choose your preferred duration and select subscription package for your sessions. 
          </div>
        </div>
      </div>
      <img src={Subscribe} alt="Subscribe" id="subscribe" />
      <div className="subscribe-bg" />
      <div className="container-5">
        <div className="card" style={{'margin-top' :'100px'}}>
          <div className="card-txt-1 card-txt-3">3. Select time slot</div>
          <div className="card-txt-2">
          Subscribe & select any time slot between 10 AM to 12 midnight.
          </div>
        </div>
        <div className="card" style={{'margin-top' :'100px'}}>
          <div className="card-txt-1">4. You are done</div>
          <div className="card-txt-2">
            That’s it! Start practicing and reach your learning goal in
            speaking.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
