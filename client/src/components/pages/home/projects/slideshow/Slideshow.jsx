import React, { useState, useEffect } from "react";
import { TweenMax } from "gsap";
import projects from "./projects";
import { Container, SlideWrapper, Slide, SlideshowBtn } from "./style";

const Slideshow = React.memo(() => {
  const [slideshow, setSlideshow] = useState([]);
  const [show, setShow] = useState([]);

  const back = () => {
    const newSlideshow = slideshow
      .slice(-1)
      .concat(slideshow.slice(0, projects.length - 1));
    if (window.innerWidth < 600) {
      const newShow = [newSlideshow[0]];
      setSlideshow(newSlideshow);
      setShow(newShow);
    } else {
      setSlideshow(newSlideshow);
      setShow(newSlideshow);
    }
  };
  const forward = () => {
    const newSlideshow = slideshow.slice(1).concat(slideshow.slice(0, 1));
    if (window.innerWidth < 600) {
      const newShow = [newSlideshow[0]];
      setSlideshow(newSlideshow);
      setShow(newShow);
    } else {
      setSlideshow(newSlideshow);
      setShow(newSlideshow);
    }
  };

  useEffect(() => {
    const intervalID = setInterval(forward, 3000);
    return () => {
      clearInterval(intervalID);
    };
  });
  useEffect(() => {
    setSlideshow(projects);
    window.innerWidth < 600 ? setShow([projects[0]]) : setShow(projects);
  }, []);
  useEffect(() => {
    TweenMax.fromTo(".img-link", 1.5, { opacity: 0.2 }, { opacity: 1 });
  });
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 600) {
        setShow([projects[0]]);
      } else {
        setShow(projects);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <Container>
      <SlideshowBtn className="back" onClick={back} />
      {show.map(slide => (
        <SlideWrapper key={slide.id} className="img-link">
          <Slide {...slide} />
        </SlideWrapper>
      ))}
      <SlideshowBtn className="forward" onClick={forward} />
    </Container>
  );
});

export default Slideshow;
