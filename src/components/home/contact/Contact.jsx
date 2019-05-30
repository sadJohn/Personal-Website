import React from "react";
import { Container, Q, Title, Ul, Li, A } from "./style";
import "@fortawesome/fontawesome-free/css/all.css";

const Contact = () => {
  return (
    <Container>
      <Q>Long united must divide.</Q>
      <Title>Contact Me!</Title>
      <Ul>
        <Li>
          <A href="https://www.facebook.com/johan.liebert.94617">
            <i class="fab fa-facebook" />
          </A>
        </Li>
        <Li>
          <A href="https://www.instagram.com/sadotibo/">
            <i class="fab fa-instagram" />
          </A>
        </Li>
        <Li>
          <A href="https://www.weibo.com/5184899549">
            <i class="fab fa-weibo" />
          </A>
        </Li>
        <Li>
          <A href="https://github.com/sadJohn">
            <i class="fab fa-github" />
          </A>
        </Li>
        <Li>
          <A href="">
            <i class="far fa-envelope" />
          </A>
        </Li>
      </Ul>
      <div>
        <i class="far fa-copyright" />2019 Johan, All rights reserved. Web
        developer.
      </div>
    </Container>
  );
};

export default Contact;
