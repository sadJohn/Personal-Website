import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./../../../../context/AuthContext";
import {
  Wrapper,
  Container,
  Photo,
  Img,
  Input,
  Button,
  Editor,
  CommentsUl,
  Li,
  Username,
  Message,
  Options,
  Reply,
  Vote
} from "./style";
import photo from "../../../../assets/images/photo.jpg";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { isLogin, username } = useContext(AuthContext);

  const fatchComments = async () => {
    const response = await fetch("http://localhost:3999/api/comments");
    const comments = await response.json();
    setComments(comments);
  };
  useEffect(() => {
    fatchComments();
  }, []);

  const onCommentChange = e => {
    setComment(e.target.value);
  };

  const onComment = async () => {
    if (!isLogin) return alert("Login first");

    const data = { username, message: comment };
    console.log("data", data);

    const response = await fetch("http://localhost:3999/api/comments", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const result = await response.json();
    alert(result.status);
    fatchComments();
    setComment("");
  };

  return (
    <Wrapper>
      <Container>
        <Editor>
          <Photo>
            <Img src={photo} alt="user" />
          </Photo>
          <Input type="text" value={comment} onChange={onCommentChange} />
          <Button onClick={onComment}>Comment</Button>
        </Editor>

        <CommentsUl>
          {comments.map(comment => (
            <Li>
              <Photo>
                <Img src={photo} alt="user" />
              </Photo>
              <Username>{comment.username}</Username>
              <Message>{comment.message}</Message>
              <Options>
                <Vote>
                  <i class="fas fa-chevron-up" />
                </Vote>
                <Vote>
                  <i class="fas fa-chevron-down" />
                </Vote>
                <Reply>Reply</Reply>
              </Options>
            </Li>
          ))}
        </CommentsUl>
      </Container>
    </Wrapper>
  );
};

export default Comment;
