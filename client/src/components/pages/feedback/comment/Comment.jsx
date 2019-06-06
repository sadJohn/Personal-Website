import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./../../../../context/AuthContext";

const Feedback = () => {
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
    <div>
      <input type="text" value={comment} onChange={onCommentChange} />
      <button onClick={onComment}>Comment</button>
      <ul>
        {comments.map(comment => (
          <li>
            {comment.username}: {comment.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
