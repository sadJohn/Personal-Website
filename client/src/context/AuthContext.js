import React from "react";

const AuthContext = React.createContext({
  isLogin: false,
  username: '',
  setIsLogin: () => {},
  setUser: () => {}
});

export default AuthContext;
