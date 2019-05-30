import React from "react";
import Welcome from "./Welcome/Welcome";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Learn from "./learn/learn";

const Home = React.memo(props => {
  return (
    <>
      <Welcome />
      <Introduction />
      <Projects />
      <Learn />
    </>
  );
});

export default Home;
