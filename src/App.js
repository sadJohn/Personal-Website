import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Introduction from "./components/introduction/Introduction";
import BgCanvas from "./components/bgcanvas/BgCanvas/BgCanvas";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <BgCanvas />
      <Home />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
