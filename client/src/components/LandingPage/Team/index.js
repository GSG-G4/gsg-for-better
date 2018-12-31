import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchTeamMembersAction from '../../../actions/fetch_team_members';

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
  state = {
    teamMembers: [],
  };

  componentDidMount() {
    const { fetchTeamMembers } = this.props;
    fetchTeamMembers(111);
  }

  componentDidUpdate = prevProps => {
    const { teamMembers } = this.props;
    const { teamMembers: oldTeamMembers } = this.state;
    if (prevProps.teamMembers !== oldTeamMembers) {
      this.setState({ teamMembers });
    }
  };

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

const mapStateToProps = state => ({ teamMembers: state.teams.members });
const mapDispatchToProps = { fetchTeamMembers: fetchTeamMembersAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
