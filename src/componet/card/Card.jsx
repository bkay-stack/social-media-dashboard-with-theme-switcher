import React from "react";
import "./card.styles.css";
const Card = () => {
  return (
    <div className="card">
      <div className="dash-board-card">
        <div className="dash-board">
          <h3>Social Media Dashboard</h3>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="dash-line"></div>
        <div className="dash-check"></div>
      </div>
    </div>
  );
};

export default Card;
