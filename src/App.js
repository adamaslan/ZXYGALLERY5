import React from "react";
// import Split from "react-split";
import SplitPane from "react-split-pane";
import "./App.css";

function App() {
  return (
    <div style={{ height: "25%", backgroundColor: "green", border: "50%" }}>
      <h1>Welcome to ZXY Gallery</h1>

      <SplitPane
        split="vertical"
        minSize={100}
        defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
        onChange={size => localStorage.setItem("splitPos", size)}
      >
        <div style={{ height: "75%", backgroundColor: "red", border: "5%" }}>
          <h1>This Area is Highly Toggleable</h1>
        </div>
        <div style={{ height: "85%", backgroundColor: "yellow", border: "5%" }}>
          <h1>
            We love these
            <a target="_blank" href="http://chillcastle.com/art">
              <h1>Artists</h1>
            </a>
            They have shown with us in the past.
          </h1>
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
