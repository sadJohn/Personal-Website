import React from "react";
import Welcome from "./Welcome/Welcome";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Learn from "./learn/learn";
import Contact from "./contact/Contact";

const Home = React.memo(props => {
  return (
    <>
      <Welcome />
      <Introduction />
      <Projects />
      <Learn />
      <Contact />
    </>
  );
});

export default Home;
