import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StyledNav, Ul, Li, Link, Fixed } from "./style";
import Feedback from "./../feedback/Feedback";
import Home from "./../home/Home";

const Nav = () => {
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
          </Ul>
        </StyledNav>
      </Fixed>

      <Route path="/" exact component={Home} />
      <Route path="/feedback/" component={Feedback} />
    </Router>
  );
};

export default Nav;
