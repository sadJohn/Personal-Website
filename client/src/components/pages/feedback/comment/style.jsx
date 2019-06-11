import styled from "styled-components"; 
import Editor from './editor/Editor';

export const Wrapper = styled.div`
  width: 800px;
  margin: 10px auto;
  background-color: #f0f0f0;
  font-family: 'Open Sans', sans-serif;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
`;

export const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;
`;

export const ReplyEditor = styled(Editor)`
  
`;

export const CommentEditor = styled(Editor)`
  display: block;
`;

export const CommentsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 80px;

  & ul {
    margin-top: 10px;
  }
`;
export const Li = styled.li`
  width: 100%;
  min-height: 50px;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const Username = styled.div`
  margin-left: 70px;
  margin-bottom: 1rem;
`;

export const Message = styled.div`
  margin-left: 70px;
`;

export const Options = styled.div`
  margin-left: 70px;
`;

export const Vote = styled.div`
  display: inline-block;
  margin: 5px 10px;
  cursor: pointer;
  position: relative;
`;

export const VoteCount = styled.div`
  position: absolute;
  left: 20px;
`;

export const Reply = styled.div`
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
`;


