import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: grey;
  position: sticky;
  left: 0;
  top: 0;
`;

export const Heading = styled.h1`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavBar = styled.nav`
  background: black;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
`;

export const ListItem = styled.li`
  background: 'lightblue';
  padding: 5px 20px;
  /* padding-left: 20px; */
  border-left: 1px solid black;
  &:hover {
    background: yellow;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
