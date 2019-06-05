import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StyledNav, Ul, Li, Link, Fixed, Div } from "./style";
import Feedback from "./../pages/feedback/Feedback";
import Home from "./../pages/home/Home";
import AuthContext from "./../../context/AuthContext";

const Nav = ({onLogin, onRegiste}) => {
  const { isLogin } = useContext(AuthContext);
  return (
    <Router>
      <Fixed>
        <StyledNav>
          <Ul>
            <Li>
              <Link to="/">HOME</Link>
            </Li>
            <Li>
              <Link to="/feedback/">FEEDBACK</Link>
            </Li>
            {isLogin ? (
              <h1>{localStorage.getItem("username")}</h1>
            ) : (
              <>
                <Li>
                  <Div onClick={onLogin}>Login</Div>
                </Li>
                <Li>
                  <Div onClick={onRegiste}>Sign Up</Div>
                </Li>
              </>
            )}
          </Ul>
        </StyledNav>
      </Fixed>

      <Route path="/" exact component={Home} />
      <Route path="/feedback/" component={Feedback} />
    </Router>
  );
};

export default Nav;
