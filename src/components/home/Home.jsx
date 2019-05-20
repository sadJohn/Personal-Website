import React from "react";
import BgCanvas from "./BgCanvas/BgCanvas";
import Nav from "./Nav/Nav";
import Welcome from "./Welcome/Welcome";

const Home = props => {
  return (
    <>
      <BgCanvas />
      <Nav />
      <Welcome/>
    </>
  );
};

export default Home;
