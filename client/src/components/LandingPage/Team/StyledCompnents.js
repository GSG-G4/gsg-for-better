import styled from 'styled-components';

// Team Card elements
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
  font-family: 'Wallpoet', cursive;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
`;

export const CardImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 70%;
  border-radius: 50%;
  padding: 2px;
  border: 1.5px dashed var(--cyan);
`;

export const UserName = styled.h1`
  font-size: 24px;
  color: #fff;
  text-transform: capitalize;
`;

export const UserSpecialty = styled.h2`
  font-size: 18px;
  color: var(--cyan);
  letter-spacing: -1.33px;
`;
