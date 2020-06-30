import React from "react";
// import Split from "react-split";
import SplitPane from "react-split-pane";
import "./App.css";

function App() {
  return (
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
      onChange={size => localStorage.setItem("splitPos", size)}
    >
      <div style={{ height: "800px", backgroundColor: "yellow" }}>
        {" "}
        left pane
      </div>
      <div style={{ height: "800px", backgroundColor: "green" }}>
        right pane
      </div>
    </SplitPane>
  );
}

export default App;
