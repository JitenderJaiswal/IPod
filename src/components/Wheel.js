import React from "react";
import { Link } from "react-router-dom";

function Wheel(props) {
  const { togglePlay, volumeDecrease, volumeIncrease } = props;
  return (
    <div>
      <div
        id="container"
        style={{
          height: 200,
          width: 250,
          borderRadius: 30,
          position: "relative",
          left: "8%",
          marginTop: "20px",
        }}
      >
        <div
          id="object"
          style={{
            height: 210,
            width: 210,
            background: "#3f51b54a",
            borderRadius: "50%",
            position: "absolute",
            left: "9%",
          }}
        >
          <div
            style={{
              color: "#D3D3D3",
              position: "absolute",
              left: "38%",
              top: "10%",
            }}
          >
            <Link to="/">
              <img
                src="  https://www.flaticon.com/svg/static/icons/svg/3463/3463351.svg"
                style={{ width: "50px", height: "50px" }}
              />
            </Link>
          </div>
          <div
            style={{
              color: "#D3D3D3",
              position: "absolute",
              left: "38%",
              top: "70%",
            }}
          >
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#3f51b54a",
                border: "none",
              }}
              onClick={togglePlay}
            >
              <img
                src=" https://www.flaticon.com/premium-icon/icons/svg/2377/2377746.svg"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </button>
          </div>
          <div
            style={{
              color: "#D3D3D3",
              position: "absolute",
              left: "1%",
              top: "40%",
            }}
          >
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#3f51b54a",
                border: "none",
              }}
              onClick={volumeDecrease}
            >
              <img
                src=" https://www.flaticon.com/svg/static/icons/svg/3039/3039477.svg"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </button>
          </div>
          <div
            style={{
              color: "#D3D3D3",
              position: "absolute",
              left: "70%",
              top: "40%",
            }}
          >
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#3f51b54a",
                border: "none",
              }}
              onClick={volumeIncrease}
            >
              <img
                src=" https://www.flaticon.com/svg/static/icons/svg/3039/3039419.svg"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheel;
