import React, { useState, useContext } from "react";
import AuthContext from ".././../../../../context/AuthContext";
import {
  StyledEditor,
  Photo,
  Img,
  Input,
  CancelBtn,
  Button,
  Group
} from "./style";
import photo from "../../../../../assets/images/photo.jpg";

const Editor = ({
  className,
  fatchComments,
  children,
  onCancel,
  commentBtn,
  route
}) => {
  const [comment, setComment] = useState("");
  const { isLogin, username } = useContext(AuthContext);
  const onCommentChange = e => {
    setComment(e.target.value);
  };

  const onComment = async (route) => {
    if (!isLogin) return alert("Login first");

    const data = { username, message: comment, route };

    const response = await fetch("/api/comments", {
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
    <StyledEditor className={className}>
      <Photo>
        <Img src={photo} alt="user" />
      </Photo>
      <Input type="text" value={comment} onChange={onCommentChange} />
      <Group>
        {commentBtn ? null : <CancelBtn onClick={onCancel}>Cancel</CancelBtn>}

        <Button onClick={onComment.bind(this, route)}>
          {children}
        </Button>
      </Group>
    </StyledEditor>
  );
};

export default Editor;
