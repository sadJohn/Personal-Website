import React from "react";
import { StyledProfile, StyledPhoto, StyledName } from "./style";

const Profile = React.memo(() => {
  return (
    <StyledProfile>
      <StyledPhoto />
      <StyledName>Johan</StyledName>
    </StyledProfile>
  );
});

export default Profile;
