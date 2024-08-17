import "./card.styles.css";
import fbImg from "../../assets/images/icon-facebook.svg";
import IgImg from "../../assets/images/icon-instagram.svg";
import twitterImg from "../../assets/images/icon-twitter.svg";
import youtubeImg from "../../assets/images/icon-youtube.svg";
import arrowImg from "../../assets/images/icon-up.svg";
import arrdownImg from "../../assets/images/icon-down.svg";
import useLocalStorage from "use-local-storage";
const Card = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="card-content-1" data-theme={theme}>
      <div className="dashboard-theme-switch">
        <div className="social-media-dashboard">
          <h3>Social Media Dashboard</h3>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="dash-line"></div>
        <div className="dash-check">
          <div className="check-box-p">
            <p>Dark Mode</p>
          </div>
          {/* Switch Button */}
          <div className="btn">
            <label className="switch">
              <input
                type="checkbox"
                onChange={switchTheme}
                checked={theme === "dark"}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="card-item">
        {/* Facebook card */}
        <div className="fb-card-content card-items">
          <div className="icons-wrap">
            <img src={fbImg} alt="Facebook Icon" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>1987</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-div">
            <img src={arrowImg} className="green-arrw" alt="Up Arrow" />
            <span>12 Today</span>
          </div>
        </div>
        {/* Twitter card */}
        <div className="tw-card-content card-items">
          <div className="icons-wrap">
            <img src={twitterImg} alt="Twitter Icon" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>1044</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-div">
            <img src={arrowImg} className="green-arrw" alt="Up Arrow" />
            <span>99 Today</span>
          </div>
        </div>
        {/* Instagram card */}
        <div className="ig-card-content card-items">
          <div className="icons-wrap">
            <img src={IgImg} alt="Instagram Icon" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>11k</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-div">
            <img src={arrowImg} className="green-arrw" alt="Up Arrow" />
            <span>1099 Today</span>
          </div>
        </div>
        {/* YouTube card */}
        <div className="youtube-card-content card-items">
          <div className="icons-wrap">
            <img src={youtubeImg} alt="YouTube Icon" />
            <p>@Nathanf</p>
          </div>
          <div className="fol">
            <h1>8239</h1>
            <p>FOLLOWERS</p>
          </div>
          <div className="arrow-down-div">
            <img src={arrdownImg} className="green-arrw" alt="Down Arrow" />
            <span>144 Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
