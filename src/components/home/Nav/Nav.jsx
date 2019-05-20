import React from "react";
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledA,
  StyledFixed
} from "./NavStyle";

const Nav = props => {
  return (
    <StyledFixed>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledA href="/">HOME</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="/">ABOUT</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="/">ABOUT</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="/">ABOUT</StyledA>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledFixed>
  );
};

export default Nav;
