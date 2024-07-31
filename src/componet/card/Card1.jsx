import React from "react";
import { useState } from "react";
import "./card1.styles.css";
import fbImg from "../../assets/images/icon-facebook.svg";
import IgImg from "../../assets/images/icon-instagram.svg";
import twitterImg from "../../assets/images/icon-twitter.svg";
import youtubeImg from "../../assets/images/icon-youtube.svg";
import arrowImg from "../../assets/images/icon-up.svg";
import arrdownImg from "../../assets/images/icon-down.svg";
const Card1 = () => {
  const [setChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!setChecked);
  };
  return (
    <div className="card">
      {/* Card1 - wrap */}
      <div className="dash-board-card">
        {/* Dash board */}
        <div className="dash-board">
          <h3>Social Media Dashboard</h3>
          <p>Total Followers: 23,004</p>
        </div>
        {/* Line */}
        <div className="dash-line"></div>
        <div className="dash-check">
          <div className="check-box-p">
            <p>Dark Mode</p>
          </div>
          {/* BTN */}
          <label className="switch">
            <input
              type="checkbox"
              checked={setChecked}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="card-content-1">
        {/* Fb card */}
        <div className="fb-card-content card-items">
          <div className="icons-wrap">
            <img src={fbImg} alt="" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>1987</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-div">
            <img src={arrowImg} className="green-arrw" alt="" />
            <span>12 Today</span>
          </div>
        </div>
        {/* Twitter card */}
        <div className="tw-card-content card-items">
          <div className="icons-wrap">
            <img src={twitterImg} alt="" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>1044</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-div">
            <img src={arrowImg} className="green-arrw" alt="" />
            <span>12 Today</span>
          </div>
        </div>
        {/* IG card */}
        <div className="ig-card-content card-items">
          <div className="icons-wrap">
            <img src={IgImg} alt="" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>11K</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-div">
            <img src={arrowImg} className="green-arrw" alt="" />
            <span>12 Today</span>
          </div>
        </div>
        {/* youtube card */}
        <div className="youtube-card-content card-items">
          <div className="icons-wrap">
            <img src={youtubeImg} alt="" />
            <p>@Nathan F.</p>
          </div>
          <div className="fol">
            <h1>8239</h1>
            <p>SUBSCRIBERS</p>
          </div>
          <div className="red-span">
            <img src={arrdownImg} className="green-arrw" alt="" />
            <span>12 Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
