import React from "react";
import BgCanvas from "./canvas/Canvas";
import Welcome from "./welcome/Welcome";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Learn from "./learn/Learn";
import Contact from "./contact/Contact";

const Home = React.memo(() => (
  <>
    <BgCanvas />
    <Welcome />
    <Introduction />
    <Projects />
    <Learn />
    <Contact />
  </>
));

export default Home;
