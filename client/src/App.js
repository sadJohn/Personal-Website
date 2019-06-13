import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import AuthContext from "./context/AuthContext";
import UserManage from "./components/pages/usermanage/UserManage";

const App = React.memo(() => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegiste, setShowRegiste] = useState(false);
  const [contextValue, setContextValue] = useState({
    isLogin,
    username,
    setIsLogin,
    setUser
  });

  useEffect(() => {
    setContextValue({ isLogin, username, setIsLogin, setUser });
  }, [isLogin, username, setIsLogin, setUser]);

  const onLogin = useCallback(() => {
    if (showRegiste) setShowRegiste(false);
    setShowLogin(!showLogin);
  }, [showRegiste, showLogin]);

  const onRegiste = useCallback(() => {
    if (showLogin) setShowLogin(false);
    setShowRegiste(!showRegiste);
  }, [showLogin, showRegiste]);

  const hideModal = e => {
    if (e.target.matches(".modal") && showLogin) {
      return setShowLogin(false);
    }
    if (e.target.matches(".modal") && showRegiste) {
      return setShowRegiste(false);
    }
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <Nav onLogin={onLogin} onRegiste={onRegiste} />
      {showLogin ? (
        <UserManage showLogin hideModal={hideModal} onLogin={onLogin} />
      ) : null}
      {showRegiste ? (
        <UserManage showRegiste hideModal={hideModal} onRegiste={onRegiste} />
      ) : null}
    </AuthContext.Provider>
  );
});
export default App;
