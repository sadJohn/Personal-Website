import React, { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  Container,
  CommentEditor,
  ReplyEditor,
  CommentsUl,
  Li,
  Username,
  Message,
  Options,
  VoteCount,
  Reply,
  Vote
} from "./style";
import { Photo, Img } from "./editor/style";
import photo from "../../../../assets/images/photo.jpg";
import AuthContext from "../../../../context/AuthContext";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const { isLogin, username } = useContext(AuthContext);

  const fatchComments = async () => {
    const response = await fetch("/api/comments");
    const comments = await response.json();
    setComments(comments);
  };
  useEffect(() => {
    fatchComments();
  }, []);

  const showEditor = e => {
    e.target.nextElementSibling.style.display = "block";
  };
  const canelComment = e => {
    e.target.parentElement.parentElement.style.display = "none";
  };

  function vote(length, comments, route) {
    if (length === route.length) {
      return comments.voteCount
    } else {
      if (length === route.length - 1)
        return vote(length + 1, comments[route[length]], route);
      else return vote(length + 1, comments[route[length]].reply, route);
    }
  }

  const voteSubmit = async e => {
    if (!isLogin) return alert("Login first");
    const type = e.currentTarget.dataset.type;
    const route = e.currentTarget.dataset.route.split(',');
    const otherType = type === "voteup" ? "votedown" : "voteup";
    const response = await fetch("/api/comments");
    const comments = await response.json();
    
    const voteCount = vote(0, comments, route, type)
    console.log(voteCount)
    if (
      voteCount[type].users.findIndex(user => user === username) !== -1 ||
      voteCount[otherType].users.findIndex(user => user === username) !== -1
    )
      return;

    const data = { route, type, username };

    const state = await fetch("/api/vote", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const result = await state.json();
    alert(result.status);
    fatchComments();
  };

  const displayComments = comments => {
    if (comments.length === 0) {
      return;
    } else {
      return comments.map(comment => {
        return (
          <Li>
            <Photo>
              <Img src={photo} alt="user" />
            </Photo>
            <Username>{comment.username}</Username>
            <Message>{comment.message}</Message>
            <Options>
              <Vote
                onClick={voteSubmit}
                data-route={comment.route}
                data-type="voteup"
              >
                <VoteCount>{comment.voteCount.voteup.counts}</VoteCount>
                <i class="fas fa-chevron-up" />
              </Vote>
              <Vote
                onClick={voteSubmit}
                data-route={comment.route}
                data-type="votedown"
              >
                <VoteCount>{comment.voteCount.votedown.counts}</VoteCount>
                <i class="fas fa-chevron-down" />
              </Vote>
              <Reply onClick={showEditor}>Reply</Reply>
              <ReplyEditor
                fatchComments={fatchComments}
                onCancel={canelComment}
                route={comment.route}
              >
                Reply
              </ReplyEditor>
              <CommentsUl>{displayComments(comment.reply)}</CommentsUl>
            </Options>
          </Li>
        );
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <CommentEditor
          fatchComments={fatchComments}
          onCancel={canelComment}
          commentBtn
        >
          Comment
        </CommentEditor>
        <CommentsUl>{displayComments(comments)}</CommentsUl>
      </Container>
    </Wrapper>
  );
};

export default Comment;
