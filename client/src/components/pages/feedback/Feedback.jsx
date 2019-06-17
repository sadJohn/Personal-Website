import React, { useState, useEffect, useContext } from "react";
import Comment from "./comment/Comment";
import { Wrapper, Summary, Like, Count } from "./style";
import like from "../../../assets/images/like.jpeg";
import dislike from "../../../assets/images/dislike.jpg";
import AuthContext from "../../../context/AuthContext";
import Particles from "react-particles-js";

const Feedback = React.memo(() => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const { isLogin, username } = useContext(AuthContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const fatchCount = async () => {
    try {
      const response = await fetch("/api/counts");
      const { likeCount, dislikeCount } = await response.json();
      setLikeCount(likeCount.counts);
      setDislikeCount(dislikeCount.counts);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fatchCount();
  }, []);

  const countSubmit = async e => {
    try {
      if (!isLogin) return alert("Login first");
      const type = e.currentTarget.dataset.type;
      const otherType = type === "likeCount" ? "dislikeCount" : "likeCount";
      const response = await fetch("/api/counts");
      const counts = await response.json();
      if (
        counts[type].users.findIndex(user => user === username) !== -1 ||
        counts[otherType].users.findIndex(user => user === username) !== -1
      )
        return;

      const count = 1;
      const data = { count, username, type };

      const state = await fetch("/api/counts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      const result = await state.json();
      console.log(result.status);
      type === "likeCount"
        ? setLikeCount(likeCount + 1)
        : setDislikeCount(dislikeCount + 1);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <Particles
        className="paticlesWrapper"
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: width < 600 ? 50 : 100
            },
            color: {
              value: "#000"
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#000",
              opacity: 0.4,
              width: 0.5
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              }
            }
          }
        }}
      />
      <Summary>
        <h1>Need Feedback</h1>
        <p>
          Hi guys! nice to meet you. Here I want to share everything about my
          website with you.
        </p>
        <p>
          I started designing this website in May of 2019. Why did I decide to
          make this website? Ok, you know I'm a college student. Actually this
          is one of my final assignment in my frontend course. I have never done
          a complete project since I started learning frontend development, so
          this is my first time making a complete and kind of complicated
          project from scratch to deployment. I spent almost a month to finish
          it, and I have acquired a lot of valuable experience during this
          period. This is definitely the most important purpose.
        </p>

        <p>
          To make this website, I used some popular technologies. I used React
          to build UI, GSAP to create animation, and Express to build a server.
          I earned a lot of fun, also encountered a lot of difficulties and I
          solved most of them. Mobile adaptation is the most headache one, and
          finaly I did it through my efforts, although far from perfection.
        </p>
        <p>
          I know that this website is lack of content, which is the most
          importent to a website. I hope to experience more in the future to
          Rich the content.
        </p>
        <p>
          So, how do you like my page?{" "}
          <Like onClick={countSubmit} data-type="likeCount">
            <Count>{likeCount}</Count>
            <i className="fas fa-thumbs-up" />
            <img src={like} alt="like" />
          </Like>
          <Like onClick={countSubmit} data-type="dislikeCount">
            <Count>{dislikeCount}</Count>
            <i className="fas fa-thumbs-down" />
            <img src={dislike} alt="dislike" />
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
});

export default Feedback;
