import React from "react";
import styled from "styled-components";
import { Home } from "styled-icons/material/Home";
import { Fire } from "styled-icons/icomoon/Fire";
import { VideoLibrary } from "styled-icons/material/VideoLibrary";
import { Subscriptions } from "styled-icons/material/Subscriptions";

const SideNavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  width: 72px;
  background: #fff;
`;

function SideClosed() {
  return (
    <SideNavStyles>
      <a>
        <HomeIcone /> Home
      </a>
      <a>
        <FireIcone /> trending
      </a>
      <a>
        <SubscriptionsIcone /> Subscription
      </a>
      <a>
        <VideoLibraryIcone /> Library
      </a>
    </SideNavStyles>
  );
}
const HomeIcone = styled(Home)`
  width: 25px;
`;
const FireIcone = styled(Fire)`
  width: 25px;
`;
const VideoLibraryIcone = styled(VideoLibrary)`
  width: 25px;
`;
const SubscriptionsIcone = styled(Subscriptions)`
  width: 25px;
`;

export default SideClosed;
