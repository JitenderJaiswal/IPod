import React from "react";
import "../App.css";
import ZingTouch from "zingtouch";
import { BrowserRouter as Router } from "react-router-dom";
import { Screen, Wheel } from "./";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      angleChanged: 0,
      index: 0,
      play: false,
      volume: 1,
    };
  }

  componentDidMount() {
    const containerElement = document.getElementById("container");
    const activeRegion = ZingTouch.Region(containerElement);
    const childElement = document.getElementById("object");

    activeRegion.bind(childElement, new ZingTouch.Rotate(), (event) => {
      this.setState((prevState) => {
        return {
          angleChanged: prevState.angleChanged + event.detail.distanceFromLast,
        };
      });
    });
  }

  componentDidUpdate() {
    const { angleChanged, index } = this.state;
    if (angleChanged > 15) {
      if (index === 3) this.setState({ index: 0, angleChanged: 0 });
      else this.setState({ index: index + 1, angleChanged: 0 });
    } else if (angleChanged < -15) {
      if (index === 0) this.setState({ index: 3, angleChanged: 0 });
      else this.setState({ index: index - 1, angleChanged: 0 });
    }
  }
  togglePlay = () => {
    const { play } = this.state;
    console.log("App", play);
    this.setState({ play: !play });
  };
  volumeIncrease = () => {
    const { volume } = this.state;
    this.setState({ volume: volume + 0.1 });
  };
  volumeDecrease = () => {
    const { volume } = this.state;
    this.setState({ volume: volume - 0.1 });
  };
  render() {
    const { index, angleChanged, play, volume } = this.state;
    return (
      <div className="App" style={{ background: "#673ab71f" }}>
        <Router>
          <div
            style={{
              height: 450,
              width: 300,
              background: "#f443365e",
              borderRadius: 30,
              margin: "auto",
              marginTop: "10%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
            }}
          >
            <Screen
              index={index}
              angleChanged={angleChanged}
              play={play}
              volume={volume}
            />

            <Wheel
              index={index}
              angleChanged={angleChanged}
              togglePlay={this.togglePlay}
              volumeIncrease={this.volumeIncrease}
              volumeDecrease={this.volumeDecrease}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
