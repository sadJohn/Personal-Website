import React, { useState, useContext } from "react";
import AuthContext from ".././../../../../context/AuthContext";
import { StyledEditor, Photo, Img, Input, Button, Group } from "./style";
import photo from "../../../../../assets/images/photo.jpg";

const Editor = React.memo(
  ({ className, fatchComments, replyBtn, onCancel, commentBtn, route }) => {
    const [comment, setComment] = useState("");
    const { isLogin, username } = useContext(AuthContext);

    const onCommentChange = e => {
      setComment(e.target.value);
    };

    const onComment = async route => {
      try {
        if (!isLogin) return alert("Login first");
        if (comment === "") return;

        const data = { username, message: comment, route };

        const response = await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify(data),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        });
        const result = await response.json();
        console.log(result.status);
        fatchComments();
        setComment("");
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <StyledEditor className={className}>
        <Photo>
          <Img src={photo} alt="user" />
        </Photo>
        <Input type="text" value={comment} onChange={onCommentChange} />
        <Group>
          {replyBtn ? (
            <Button className="reply" onClick={onComment.bind(this, route)} />
          ) : (
            <Button className="comment" onClick={onComment.bind(this, route)} />
          )}
          {commentBtn ? null : <Button className="cancel" onClick={onCancel} />}
        </Group>
      </StyledEditor>
    );
  }
);

export default Editor;
