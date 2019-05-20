import React from "react";
import { StyledProfile, StyledPhoto, StyledName } from "./ProfileStyle";

const Profile = props => {
  return (
    <StyledProfile>
      <StyledPhoto />
      <StyledName>Johan</StyledName>
    </StyledProfile>
  );
};

export default Profile;
