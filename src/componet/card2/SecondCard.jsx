import React from "react";
import useLocalStorage from "use-local-storage";
import "./secondcard.styles.css";
import fbImg from "../../assets/images/icon-facebook.svg";
import IgImg from "../../assets/images/icon-instagram.svg";
import twitterImg from "../../assets/images/icon-twitter.svg";
import youtubeImg from "../../assets/images/icon-youtube.svg";
import arrowImg from "../../assets/images/icon-up.svg";
import arrdownImg from "../../assets/images/icon-down.svg";

const SecondCard = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  console.log("Current theme:", theme);

  return (
    <div className="card-content-2" data-theme={theme}>
      <div className="card-header">
        <h3>Overview - Today</h3>
      </div>
      <div className="cards-main-wrap">
        <div className="cards card-items-1">
          <div className="card-inter">
            <span>Page Views</span>
            <h3>87</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={fbImg} alt="" />
            </div>
            <div className="icons-note">
              <img src={arrowImg} alt="" />
              <span>3%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-2">
          <div className="card-inter">
            <span>Likes</span>
            <h3>52</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={fbImg} alt="" />
            </div>
            <div className="icons-note">
              <img src={arrowImg} alt="" />
              <span>3%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-3">
          <div className="card-inter">
            <span>Likes</span>
            <h3>5562</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={IgImg} alt="" />
            </div>
            <div className="icons-note">
              <img src={arrowImg} alt="" />
              <span>2257%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-4">
          <div className="card-inter">
            <span>Profile Views</span>
            <h3>52k</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={IgImg} alt="" />
            </div>
            <div className="icons-note">
              <img src={arrowImg} alt="" />
              <span>1375%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-5">
          <div className="card-inter">
            <span>Retweets</span>
            <h3>117</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={twitterImg} alt="" />
            </div>
            <div className="icons-note">
              <img src={arrowImg} alt="" />
              <span>3%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-6">
          <div className="card-inter">
            <span>Retweets</span>
            <h3>507</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={twitterImg} alt="" />
            </div>
            <div className="icons-note">
              <img src={arrowImg} alt="" />
              <span>553%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-7">
          <div className="card-inter">
            <span>Likes</span>
            <h3>107</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={youtubeImg} alt="" />
            </div>
            <div className="icons-note icon-red">
              <img src={arrdownImg} alt="" />
              <span>19%</span>
            </div>
          </div>
        </div>
        <div className="cards card-items-8">
          <div className="card-inter">
            <span>Total Views</span>
            <h3>1407</h3>
          </div>
          <div className="card-center">
            <div className="icons">
              <img src={youtubeImg} alt="" />
            </div>
            <div className="icons-note icon-red">
              <img src={arrdownImg} alt="" />
              <span>12%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
