import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

  static propTypes = {
    fetchTeamMembers: PropTypes.func.isRequired,
    teamId: PropTypes.string.isRequired,
    teamMembers: PropTypes.arrayOf(
      PropTypes.shape({
        githubHandler: PropTypes.string,
        email: PropTypes.string,
        role: PropTypes.string,
        profileImage: PropTypes.string,
        team: PropTypes.string,
        specialty: PropTypes.string,
      }).isRequired
    ).isRequired,
  };

  componentDidMount() {
    const { fetchTeamMembers, teamId } = this.props;
    fetchTeamMembers(teamId);
  }

  componentDidUpdate = prevProps => {
    const { teamMembers } = this.props;
    const { teamMembers: oldTeamMembers } = this.state;
    if (prevProps.teamMembers !== oldTeamMembers) {
      this.setState({ teamMembers });
    }
  };

  render() {
    const { teamMembers } = this.state;
    return (
      <TeamWrapper>
        <Header>
          <HeaderImage src={TeamHeaderImage} />
          <Heading>Who We Are</Heading>
        </Header>
        <TeamCardsWrapper>
          {teamMembers.map(member => (
            <TeamCard
              key={member.id}
              name={member.name}
              profileImage={member.profileImage}
              specialty={member.specialty}
            />
          ))}
        </TeamCardsWrapper>
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
