import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

class AllSongs extends Component {
  componentDidUpdate() {
    this.rap.audioEl.current.autoplay = this.props.play;
    if (this.props.volume >= 0 && this.props.volume <= 1)
      this.rap.audioEl.current.volume = this.props.volume;
  }
  render() {
    return (
      <div>
        <div>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3504/3504255.svg"
            style={{ width: "200px", height: "150px" }}
          />
          <ReactAudioPlayer
            src="http://streaming.tdiradio.com:8000/house.mp3"
            ref={(element) => {
              this.rap = element;
            }}
          />
        </div>
      </div>
    );
  }
}

export default AllSongs;
