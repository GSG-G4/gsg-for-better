import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import {
  Header,
  Link,
  List,
  ListItem,
  Logo,
  NavBar,
  Heading,
} from './StyledComponents';

const PageHeader = () => (
  <Header>
    <Heading>
      <Logo href="https://upload.wikimedia.org/wikipedia/commons/d/df/Img_logo_blue.jpg" />
      Company Name
    </Heading>
    <NavBar>
      <List>
        <ListItem>
          <Link href="##">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="##">About Us</Link>
        </ListItem>
        <ListItem>
          <Link href="##">Portfolio</Link>
        </ListItem>
        <ListItem>
          <Link href="##">Contact Us</Link>
        </ListItem>
      </List>
    </NavBar>
  </Header>
);

export default PageHeader;
