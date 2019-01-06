import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';

import { Provider } from 'react-redux';
import Team from './index';
import store from '../../../store';

// set enzyme Adapture configuration
configure({ adapter: new Adapter() });

test('Testing for Team section', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Team />
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Team).length).toEqual(1);
});
