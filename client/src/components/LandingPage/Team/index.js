import React from 'react';

import TeamCard from './TeamCard';
import TeamHeaderImage from './team_header.png';
import {
  TeamWrapper,
  Header,
  TeamCardsWrapper,
  HeaderImage,
  Heading,
} from './StyledCompnents';

export default () => (
  <TeamWrapper>
    <Header>
      <HeaderImage src={TeamHeaderImage} />
      <Heading>Who We Are</Heading>
    </Header>
    <TeamCardsWrapper />
  </TeamWrapper>
);
