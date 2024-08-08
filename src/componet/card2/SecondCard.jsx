import React from "react";
import "./secondcard.styles.css";
import fbImg from "../../assets/images/icon-facebook.svg";
import IgImg from "../../assets/images/icon-instagram.svg";
import twitterImg from "../../assets/images/icon-twitter.svg";
import youtubeImg from "../../assets/images/icon-youtube.svg";
import arrowImg from "../../assets/images/icon-up.svg";
import arrdownImg from "../../assets/images/icon-down.svg";
const SecondCard = () => {
  return (
    <div className="card-content-2">
      <div className="card-header">
        <h3>Overview - Today</h3>
      </div>
      <div className="cards-main-wrap">
        <div className="card-content">
          <div className="cards card-items-1">
            <div className="card-inter">
              <span>Page Views</span>
              <h3>87</h3>
            </div>
            <div className="card-inter">
              <div className="icons-wrapper">
                <img src={fbImg} alt="" />
              </div>
              <div className="icons-note icon-wrapp-main">
                <div className="icons">
                  <img src={arrowImg} alt="" />
                  <span>3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="cards card-items-1">
            <div className="card-inter">
              <span>Page Views</span>
              <h3>87</h3>
            </div>
            <div className="card-inter">
              <div className="icons-wrapper">
                <img src={fbImg} alt="" />
              </div>
              <div className="icons-note icon-wrapp-main">
                <div className="icons">
                  <img src={arrowImg} alt="" />
                  <span>3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="cards card-items-1">
            <div className="card-inter">
              <span>Page Views</span>
              <h3>87</h3>
            </div>
            <div className="card-inter">
              <div className="icons-wrapper">
                <img src={fbImg} alt="" />
              </div>
              <div className="icons-note icon-wrapp-main">
                <div className="icons">
                  <img src={arrowImg} alt="" />
                  <span>3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="cards card-items-1">
            <div className="card-inter">
              <span>Page Views</span>
              <h3>87</h3>
            </div>
            <div className="card-inter">
              <div className="icons-wrapper">
                <img src={fbImg} alt="" />
              </div>
              <div className="icons-note icon-wrapp-main">
                <div className="icons">
                  <img src={arrowImg} alt="" />
                  <span>3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
