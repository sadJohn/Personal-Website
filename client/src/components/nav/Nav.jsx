import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  StyledNav,
  Ul,
  Li,
  Link,
  Fixed,
  Div,
  Photo,
  PhotoWrapper,
  User,
  Img
} from "./style";
import Feedback from "./../pages/feedback/Feedback";
import Home from "./../pages/home/Home";
import AuthContext from "./../../context/AuthContext";
import { TweenMax } from "gsap";

let scrollAction = window.pageYOffset;
let scrollDirection;

const Nav = React.memo(({ onLogin, onRegiste }) => {
  const { isLogin, username } = useContext(AuthContext);

  const scrollEvent = () => {
    const diffY = scrollAction - window.pageYOffset;
    if (diffY < 0) {
      scrollDirection = "down";
    } else if (diffY > 0) {
      scrollDirection = "up";
    }
    scrollAction = window.pageYOffset;

    if (scrollDirection === "down") {
      TweenMax.staggerTo(".Nav li", 1, { y: "-200px" }, 0.2);
    } else if (scrollDirection === "up") {
      TweenMax.staggerFromTo(".Nav li", 1, { y: "-200px" }, { y: "0" }, 0.1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Router>
      <Fixed>
        <PhotoWrapper>
          <Photo onClick={toTop} />
        </PhotoWrapper>
        <StyledNav className="Nav">
          <Ul>
            <Li>
              <Link to="/">
                <Img className="Home"/>
              </Link>
            </Li>
            <Li>
              <Link className="Feedback" to="/feedback/">
                <Img className="Feedback"/>
              </Link>
            </Li>
            {isLogin ? (
              <User>{username}</User>
            ) : (
              <>
                <Li>
                  <Div className="Login" onClick={onLogin} />
                  <Div className="Signup" onClick={onRegiste} />
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
});

export default Nav;
