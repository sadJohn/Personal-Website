import React, { useRef, useEffect } from "react";
import ImgLink from "../../common/imglink/ImgLink";
import { Container, Title } from "./style";
import projects from "./project";
import { TweenMax } from "gsap";

const Projects = React.memo(() => {
  useEffect(() => {
    const myTween = TweenMax.staggerFrom(".img-link", 1.5, { rotation: 360, scale:0.5 }, .5);
  }, []);
  return (
    <Container>
      <Title>Here are some of my Projects</Title>
      {projects.map(project => (
        <div key={project.id} className="img-link">
          <ImgLink {...project} />
        </div>
      ))}
    </Container>
  );
});

export default Projects;
