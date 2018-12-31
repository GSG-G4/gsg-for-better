import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchTeamMembers from '../../../actions/fetch_team_members';

import TeamCard from './TeamCard';

import {
  TeamWrapper,
  Header,
  TeamCardsWrapper,
  HeaderImage,
  Heading,
} from './StyledCompnents';

import TeamHeaderImage from './team_header.png';

class Team extends Component {
  componentDidMount() {
    this.props.fetchTeamMembers(111);
  }

  render() {
    return (
      <TeamWrapper>
        <Header>
          <HeaderImage src={TeamHeaderImage} />
          <Heading>Who We Are</Heading>
        </Header>
        <TeamCardsWrapper />
      </TeamWrapper>
    );
  }
}

const mapStateToProps = state => ({ teamMembers: state.team.members });
const mapDispatchToProps = { fetchTeamMembers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
