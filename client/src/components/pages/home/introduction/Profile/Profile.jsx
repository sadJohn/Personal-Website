import React from "react";
import { StyledProfile, StyledPhoto, Name } from "./style";

const Profile = React.memo(() => {
  return (
    <StyledProfile>
      <StyledPhoto />
      <Name>Johan</Name>
    </StyledProfile>
  );
});

export default Profile;
