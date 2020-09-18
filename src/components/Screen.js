import React from "react";
import {
  Home,
  CoverFlow,
  Games,
  Music,
  Setting,
  Artists,
  Albums,
  AllSongs,
} from "./";
import { Route } from "react-router-dom";

function Screen(props) {
  const { index, play, volume } = props;
  console.log("Screen", play);
  return (
    <div>
      <div
        style={{
          border: "3px solid black",
          height: 180,
          width: 230,
          borderRadius: 10,
          background: "#3f51b552",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Route path="/" exact render={() => <Home index={index} />} />
        <Route path="/CoverFlow" component={CoverFlow} />
        <Route path="/Games" component={Games} />
        <Route path="/Music" render={() => <Music index={index} />} />
        <Route path="/Setting" component={Setting} />
        <Route
          path="/AllSongs"
          render={() => <AllSongs play={play} volume={volume} />}
        />
        <Route path="/Artists" component={Artists} />
        <Route path="/Albums" component={Albums} />
      </div>
    </div>
  );
}

export default Screen;
