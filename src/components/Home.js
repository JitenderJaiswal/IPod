import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const { index } = props;

  return (
    <div>
      <div>
        <h3 style={{ marginLeft: "40px" }}>iPod.js</h3>

        <ul id="select" style={{ listStyle: "none" }}>
          <li className={index === 0 ? `active` : ``}>Cover Flow</li>
          <li className={index === 1 ? `active` : ``}>Music</li>
          <li className={index === 2 ? `active` : ``}>Games</li>
          <li className={index === 3 ? `active` : ``}>Setting</li>
        </ul>
      </div>
      <div
        style={{ position: "absolute", top: "73%", left: "48.5%", zIndex: 1 }}
      >
        {index === 0 && (
          <Link to="/CoverFlow">
            <img
              src="https://image.flaticon.com/icons/png/512/3172/3172628.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        )}
        {index === 1 && (
          <Link to="/Music">
            <img
              src="https://image.flaticon.com/icons/png/512/3172/3172628.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        )}
        {index === 2 && (
          <Link to="/Games">
            <img
              src="https://image.flaticon.com/icons/png/512/3172/3172628.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        )}
        {index === 3 && (
          <Link to="/Setting">
            <img
              src="https://image.flaticon.com/icons/png/512/3172/3172628.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
