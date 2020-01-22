import React from "react";
import Styled from "styled-components";
import { VideoCall } from "styled-icons/material/VideoCall";
import { Apps } from "styled-icons/material/Apps";
import { Bell } from "styled-icons/fa-solid/Bell";
import { UserCircle } from "styled-icons/boxicons-solid/UserCircle";

const RightSideStyles = Styled.div`
display: flex;
 
.item {
    margin-right: 20px;
    padding: 10px;
}

`;

function RightSide() {
  return (
    <RightSideStyles>
      <div className="item">
        <VidoeIcon />
      </div>
      <div className="item">
        <AppsIcon />
      </div>
      <div className="item">
        <BellIcon />
      </div>
      <div className="item">
        <UserCircleIcon />
      </div>
    </RightSideStyles>
  );
}
const VidoeIcon = Styled(VideoCall)`
width:25px;

`;
const AppsIcon = Styled(Apps)`
width:25px;

`;

const BellIcon = Styled(Bell)`
width:25px;
`;
const UserCircleIcon = Styled(UserCircle)`
width:25px;
`;

export default RightSide;
