import React, { useState, useEffect, useContext } from "react";
import Comment from "./comment/Comment";
import { Wrapper, Summary, Like, Count } from "./style";
import like from "../../../assets/images/like.jpeg";
import dislike from "../../../assets/images/dislike.jpg";
import AuthContext from "../../../context/AuthContext";

const Feedback = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const { isLogin, username } = useContext(AuthContext);

  const fatchCount = async () => {
    const response = await fetch("/api/counts");
    const { likeCount, dislikeCount } = await response.json();
    setLikeCount(likeCount.counts);
    setDislikeCount(dislikeCount.counts);
  };
  useEffect(() => {
    fatchCount();
  }, []);

  const countSubmit = async e => {
    if (!isLogin) return alert("Login first");
    const type = e.currentTarget.dataset.type;
    const otherType = type === "likeCount" ? "dislikeCount" : "likeCount";
    const response = await fetch("/api/counts");
    const counts = await response.json();
    if (
      counts[type].users.findIndex(user => user === username) !==
        -1 ||
      counts[otherType].users.findIndex(user => user === username) !==
        -1
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
    alert(result.status);
    type === "likeCount"
      ? setLikeCount(likeCount + 1)
      : setDislikeCount(dislikeCount + 1);
  };
  return (
    <Wrapper>
      <Summary>
        <h1>Need Feedback</h1>
        <p>
          Hi guys! nice to meet you. Here I want to share everything about my
          website with you.
        </p>
        <p>
          I started designing this website in May of 2019. Why did I decide to
          make this website? Ok, you know I'm a collage student. Actually this
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
        </p>
        <p>
          How do you like my page?{" "}
          <Like onClick={countSubmit} data-type="likeCount">
            <Count>{likeCount}</Count>
            <i className="fas fa-thumbs-up"></i>
            <img src={like} alt="like" />
          </Like>
          <Like onClick={countSubmit} data-type="dislikeCount">
            <Count>{dislikeCount}</Count>
            <i className="fas fa-thumbs-down"></i>
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
};

export default Feedback;
