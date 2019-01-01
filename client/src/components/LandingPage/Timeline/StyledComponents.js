/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1050px;
  margin-left: 100px;
  margin-top: 50px;
`;

export const LeftSubContainer = styled.div`
  width: 320px;
  // height: 300px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: 'Wallpoet', cursive;
  font-size: 25px;
  // margin-bottom: 35px;
`;

export const Button = styled.button`
  border: none;
  width: 230px;
  height: 50px;
  background: linear-gradient(90deg,#9afebf,#1fbfb5);
  box-shadow: 4px 4px 12px -6px black;
  border-radius: 25px;
  color: white;
  font-size: 12px;
  line-height: 50px;
  font-weight: bold;
`;
