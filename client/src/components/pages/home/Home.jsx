import React from "react";
import Canvas from "./canvas/Canvas";
import Welcome from "./welcome/Welcome";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Learn from "./learn/Learn";
import Contact from "./contact/Contact";

const Home = React.memo(() => (
  <>
    <Canvas />
    <Welcome />
    <Introduction />
    <Projects />
    <Learn />
    <Contact />
  </>
));

export default Home;
