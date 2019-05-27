import React from "react";
import Welcome from "./Welcome/Welcome";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";

const Home = props => {
  return (
    <>
      <Welcome />
      <Introduction />
      <Projects />
    </>
  );
};

export default Home;
