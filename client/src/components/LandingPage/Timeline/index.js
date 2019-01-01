import React, { Component } from 'react';

import { Container, Title, LeftSubContainer, Button } from './StyledComponents';
import laptopImg from './laptopAsset.png';

class AboutUs extends Component {
  state = {
    teamName: 'G4-AFAR',
    teamDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
  };

  render() {
    const { teamName, teamDescription } = this.state;
    return (
      <Container>
        <LeftSubContainer>
          <Title>{teamName}</Title>
          <p>
            {teamDescription.length>99?`${teamDescription.substr(0, 96)}...`:teamDescription}
          </p>
          <Button>OUR TIMELINE</Button>
        </LeftSubContainer>
        <div>
          <img src={laptopImg} alt="laptop" />
        </div>
      </Container>
    );
  }
}

export default AboutUs;
