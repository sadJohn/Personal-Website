import React, { useState, useContext } from "react";
import { Wrapper, Container, Item, Input, Button, Invalid } from "./style";
import AuthContext from "./../../../context/AuthContext";

const UserManage = ({
  showLogin,
  showRegiste,
  hideModal,
  onLogin,
  onRegiste
}) => {
  const [username, setUsername] = useState("");
  const [nameInvalid, setNameInvalid] = useState("");

  const [pwd, setPwd] = useState("");
  const [pwdInvalid, setPwdInvalid] = useState("");

  const { setIsLogin, setUser } = useContext(AuthContext);

  const login = async () => {
    try {
      const response = await fetch("/api/users");
      const users = await response.json();
      const userIndex = users.findIndex(user => user.username === username);

      if (userIndex !== -1) {
        if (users[userIndex].pwd === pwd) {
          setIsLogin(true);
          setUser(users[userIndex].username);
          onLogin();
        } else {
          setPwdInvalid("Wrong password!");
        }
      } else {
        setNameInvalid("No such User!");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const registe = async () => {
    if (username.length < 4 || pwd.length < 6) return;

    try {
      const response = await fetch("/api/users");
      const users = await response.json();
      if (users.find(user => user.username === username)) {
        return setNameInvalid("User already exists!");
      } else {
        const data = { username, pwd };

        const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(data),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        });
        const done = await response.json();
        alert(done.status);
        onRegiste();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onUsernameChange = e => {
    setUsername(e.target.value);
    if (showRegiste) {
      if (e.target.value.length < 4) {
        setNameInvalid("At least 4 letters please!");
      } else {
        setNameInvalid("");
      }
    }
    if (showLogin) {
      setNameInvalid("");
    }
  };
  const onPwdChange = e => {
    setPwd(e.target.value);
    if (showRegiste) {
      if (e.target.value.length < 6) {
        setPwdInvalid("At least 6 letters please!");
      } else {
        setPwdInvalid("");
      }
    }
    if (showLogin) {
      setPwdInvalid("");
    }
  };
  return (
    <Wrapper className="modal" onClick={hideModal}>
      <Container>
        <Item>
          Username
          <Input type="text" onChange={onUsernameChange} value={username} />
          <Invalid>{nameInvalid}</Invalid>
        </Item>
        <Item>
          Password
          <Input type="password" onChange={onPwdChange} value={pwd} />
          <Invalid>{pwdInvalid}</Invalid>
        </Item>

        {showLogin ? <Button onClick={login}>Login</Button> : null}
        {showRegiste ? <Button onClick={registe}>Sign Up</Button> : null}
      </Container>
    </Wrapper>
  );
};

export default UserManage;
