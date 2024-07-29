import React from "react";
import { useState } from "react";
import "./card.styles.css";
import fbImg from "../../assets/images/icon-facebook.svg";
import arrowImg from "../../assets/images/icon-up.svg";
const Card = () => {
  const [setChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!setChecked);
  };
  return (
    <div className="card">
      <div className="card-content-1">
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
        {/* Fb card */}
        <div className="fb-card-content">
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
      </div>
    </div>
  );
};

export default Card;
