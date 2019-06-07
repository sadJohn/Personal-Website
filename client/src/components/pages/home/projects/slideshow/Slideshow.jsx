import React, { useState, useEffect } from "react";
import { TweenMax } from "gsap";
import projects from "./projects";
import { Container, Slide, SlideshowBtn } from "./style";

const Slideshow = React.memo(() => {
  const [slideshow, setSlideshow] = useState(projects);

  const back = () => {
    const newSlideshow = slideshow
      .slice(-1)
      .concat(slideshow.slice(0, projects.length - 1));
    setSlideshow(newSlideshow);
  };
  const forward = () => {
    const newSlideshow = slideshow.slice(1).concat(slideshow.slice(0, 1));
    setSlideshow(newSlideshow);
  };

  useEffect(() => {
    const intervalID = setInterval(forward, 3000);
    return () => {
      clearInterval(intervalID);
    };
  });
  useEffect(() => {
    TweenMax.fromTo(".img-link", 1.5, { opacity: 0.2 }, { opacity: 1 });
  });
  return (
    <Container>
      <SlideshowBtn onClick={back}>
        <i className="fas fa-angle-left" />
      </SlideshowBtn>
      {slideshow.map(slide => (
        <div key={slide.id} className="img-link">
          <Slide {...slide} />
        </div>
      ))}
      <SlideshowBtn onClick={forward}>
        <i className="fas fa-angle-right" />
      </SlideshowBtn>
    </Container>
  );
});

export default Slideshow;
