import React from 'react';
import renderer from 'react-test-renderer';

import TeamCard from './TeamCard';

test('Testing for TeamCard component', () => {
  const component = renderer.create(
    <TeamCard
      name="Ramy A Shurafa"
      profileImage="https://avatars3.githubusercontent.com/u/34629478?s=460&v=4"
      specialty="Full-Stack Web Developer"
    />
  );
  expect(component).toMatchSnapshot();
});
