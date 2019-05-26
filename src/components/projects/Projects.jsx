import React from "react";
import ImgLink from "../common/imglink/ImgLink";
import photo from "../../assets/images/profile.jpg";
import { Container } from './style';

const Projects = () => {
  return (
    <Container>
      <ImgLink href="baidu.com" src={photo} alt="hello" />
    </Container>
  );
};

export default Projects;
