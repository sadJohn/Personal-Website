import React, { useState, useEffect } from "react";
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
  Reply,
  Vote
} from "./style";
import { Photo, Img } from "./editor/style";
import photo from "../../../../assets/images/photo.jpg";

const Comment = () => {
  const [comments, setComments] = useState([]);

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

  const displayComments = comments => {
    if (comments.length === 0) {
      return;
    } else {
      return comments.map((comment, index) => {
        return (
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
              <Reply onClick={showEditor} >Reply</Reply>
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
