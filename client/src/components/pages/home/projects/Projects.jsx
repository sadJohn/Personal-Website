import React from "react";
import { Container, Title, Div, A } from "./style";
import Slideshow from "./slideshow/Slideshow";

const Projects = React.memo(() => {
  return (
    <Container>
      <Title>Here are some of my Projects</Title>
      <Slideshow />
      <Div>
        Want's more?
        <A href="https://github.com/sadJohn">
          <i className="fab fa-github" />
        </A>
      </Div>
    </Container>
  );
});

export default Projects;
