import React from "react";
import Comment from "./comment/Comment";
import { Wrapper, Summary, Like } from "./style";
import like from '../../../assets/images/like.jpeg';
import dislike from '../../../assets/images/dislike.jpg'

const Feedback = () => {
  return (
    <Wrapper>
      <Summary>
        <h1>Need Feedback</h1>
        <p>
          Hi guys! nice to meet you. Here I want to share anything about my
          website with you.
        </p>
        <p>
          I started designing this website in May of 2019. Why did I decide to
          make this websit? Ok, you know I'm a collage student. Actually this is
          one of my final assignment in my frontend course. I have never done a
          complete project since I started learning frontend development, so
          this is my first time making a complete and kind of complicated
          project from scratch to deployment. I spent almost a month to finish
          it, and I have acquired a lot of valuable experience during this
          period. This is definitely the most important purpose.
        </p>
        <p>
          To make this website, I used some popular technologies. I used React
          to build UI, GSAP to create animation, and Express to build a server.
        </p>
        <p>
          How do you like my page?{" "}
          <Like>
            <i className="far fa-thumbs-up" />
            <img src={like} alt="like" />
          </Like>
          <Like>
            <i className="far fa-thumbs-down" />
            <img src={dislike} alt="dislike"/>
          </Like>
        </p>
        <p>
          Let me know what you think, please leave your comments bellow, or you
          could help me improve my page{" "}
          <a href="https://github.com/sadJohn/Personal-Website">on GitHub</a>.
        </p>
      </Summary>
      <Comment />
    </Wrapper>
  );
};

export default Feedback;
