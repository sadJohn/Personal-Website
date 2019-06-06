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

  const { setIsLogin, setUser } = useContext(AuthContext);
  const login = async () => {
    const response = await fetch("http://localhost:3999/api/users");
    const users = await response.json();
    const userIndex = users.findIndex(user => user.username === username);

    if (userIndex !== -1) {
      if (users[userIndex].pwd === pwd) {
        setIsLogin(true);
        setUser(users[userIndex].username);
        onLogin();
      } else {
        alert("wrong PWD");
      }
    } else {
      alert("No such User");
    }
  };
  const registe = async () => {
    const response = await fetch("http://localhost:3999/api/users");
    const users = await response.json();
    if (users.find(user => user.username === username)) {
      alert("already registe");
    } else {
      const data = { username, pwd };

      const response = await fetch("http://localhost:3999/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      const done = await response.json();
      alert(done);
      onRegiste();
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
