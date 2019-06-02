import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import BgCanvas from "./components/bgcanvas/BgCanvas/BgCanvas";
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <BgCanvas />
      <Nav />
      <Home />
    </div>
  );
}



export default App;
