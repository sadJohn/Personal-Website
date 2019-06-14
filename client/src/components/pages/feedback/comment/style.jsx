import styled from "styled-components";
import Editor from "./editor/Editor";

export const Wrapper = styled.div`
  width: 800px;
  margin: 10px auto 0 auto;
  background-color: rgba(240, 240, 240, 0.8);
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 87.5%;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;
`;

export const ReplyEditor = styled(Editor)`
  display: none;
`;

export const CommentEditor = styled(Editor)`
  display: block;
`;

export const CommentsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 4rem;

  & ul {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    & button {
      right: -3.5rem;
    }
  }
`;
export const Li = styled.li`
  width: 100%;
  min-height: 50px;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
`;

export const Username = styled.div`
  margin-left: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
export const Authname = styled(Username)`
  width: 50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background-color: #777;
  color: white;
  border-radius: 5px;
`;

export const Message = styled.div`
  margin-left: 3.5rem;
`;

export const Options = styled.div`
  margin-left: 3.5rem;
`;

export const Vote = styled.div`
  display: inline-block;
  margin: 0.25rem 0.5rem;
  cursor: pointer;
  position: relative;
`;

export const VoteCount = styled.div`
  position: absolute;
  left: 1rem;
`;

export const Reply = styled.div`
  display: inline-block;
  margin-left: 1rem;
  cursor: pointer;
`;
