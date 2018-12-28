import React from 'react';
import PropTypes from 'prop-types';

import {
  CardWrapper,
  ImageContainer,
  CardImage,
  UserName,
  UserSpecialty,
} from './StyledCompnents';

import CardImageBackground from './team_card.png';

const TeamCard = ({ name, profileImage, specialty }) => (
  <CardWrapper>
    <ImageContainer img={CardImageBackground}>
      <CardImage src={profileImage} />
    </ImageContainer>
    <UserName>{name}</UserName>
    <UserSpecialty>{specialty}</UserSpecialty>
  </CardWrapper>
);

export default TeamCard;

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
};
