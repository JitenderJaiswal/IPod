import React from "react";
import { Link } from "react-router-dom";

function Music(props) {
  const { index } = props;

  return (
    <div>
      <h3 style={{ marginLeft: "40px" }}>Music</h3>

      <ul id="select" style={{ listStyle: "none" }}>
        <li className={index === 0 ? `active` : ``}>All Songs</li>
        <li className={index === 1 ? `active` : ``}>Artists</li>
        <li className={index === 2 ? `active` : ``}>Albums</li>
      </ul>

      <div
        style={{ position: "absolute", top: "73%", left: "48.5%", zIndex: 1 }}
      >
        {index === 0 && (
          <Link to="/AllSongs">
            <img
              src="https://image.flaticon.com/icons/png/512/3172/3172628.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        )}
        {index === 1 && (
          <Link to="/Artists">
            <img
              src="https://image.flaticon.com/icons/png/512/3172/3172628.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        )}
        {index === 2 && (
          <Link to="/Albums">
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

export default Music;
