import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import AuthContext from "./context/AuthContext";
import UserManage from "./components/pages/usermanage/UserManage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegiste, setShowRegiste] = useState(false);

  const onLogin = () => {
    if (showRegiste) setShowRegiste(false);
    setShowLogin(!showLogin);
  };
  const onRegiste = () => {
    if (showLogin) setShowLogin(false);
    setShowRegiste(!showRegiste);
  };
  const hideModal = e => {
    if (e.target.matches(".modal") && showLogin) {
      return setShowLogin(false);
    }
    if (e.target.matches(".modal") && showRegiste) {
      return setShowRegiste(false);
    }
  };
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <Nav onLogin={onLogin} onRegiste={onRegiste} />
      {showLogin ? (
        <UserManage showLogin hideModal={hideModal} onLogin={onLogin} />
      ) : null}
      {showRegiste ? (
        <UserManage showRegiste hideModal={hideModal} onRegiste={onRegiste} />
      ) : null}
    </AuthContext.Provider>
  );
};
export default App;
