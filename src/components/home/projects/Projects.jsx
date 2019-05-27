import React from "react";
import ImgLink from "../../common/imglink/ImgLink";
import { Container, Title } from "./style";
import projects from "./project";

const Projects = () => {
  return (
    <Container>
      <Title>Here are some of my Projects</Title>
      {projects.map(project => (
        <ImgLink {...project} />
      ))}
    </Container>
  );
};

export default Projects;
