import React, { useState, useContext } from "react";
import { Wrapper, Container, Item, Input, Button } from "./style";
import AuthContext from "./../../../context/AuthContext";

const UserManage = ({
  showLogin,
  showRegiste,
  hideModal,
  onLogin,
  onRegiste
}) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const { setIsLogin } = useContext(AuthContext);
  const login = () => {
    if (localStorage.getItem("username") === username) {
      if(localStorage.getItem("pwd") === pwd){
        setIsLogin(true);
        onLogin();
      } else {
        console.log("Password is wrong");
      }
      
    } else {
      console.log("No such username");
    }
  };
  const registe = () => {
    console.log(localStorage.getItem("username"))
    if (localStorage.getItem("username") === null) {
      localStorage.setItem("username", username);
      localStorage.setItem("pwd", pwd);
      onRegiste();
    } else {
      console.log("aleady registe");
    }
  };

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };
  const onPwdChange = e => {
    setPwd(e.target.value);
  };
  return (
    <Wrapper className="modal" onClick={hideModal}>
      <Container>
        <Item>
          Username
          <Input type="text" onChange={onUsernameChange} value={username} />
        </Item>
        <Item>
          Password
          <Input type="password" onChange={onPwdChange} value={pwd} />
        </Item>

        {showLogin ? <Button onClick={login}>Login</Button> : null}
        {showRegiste ? <Button onClick={registe}>Sign Up</Button> : null}
      </Container>
    </Wrapper>
  );
};

export default UserManage;
