import styled from 'styled-components';

// Team Card elements
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  font-family: 'Wallpoet', cursive;
  text-align: center;
  margin: 27px 9%;
  @media (max-width: 720px) {
    width: 335px;
  }
  @media (min-width: 1440px) {
    width: 15%;
    margin: 27px auto;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  @media (max-width: 720px) {
    height: 270px;
  }
  @media (min-width: 1440px) {
    height: 12vw;
  }
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
  margin-bottom: 5px;
`;

export const UserSpecialty = styled.h2`
  font-size: 18px;
  color: var(--cyan);
  letter-spacing: -1.33px;
`;

// general team section elements

export const TeamWrapper = styled.div`
  text-align: center;
`;

export const TeamCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2%;
`;

export const Header = styled.header`
  position: relative;
  min-height: 7vw;
  color: #fff;
`;

export const HeaderImage = styled.img`
  width: 80%;
  min-width: 320px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: -1;
`;

export const Heading = styled.h1`
  line-height: 90px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  font-family: 'Wallpoet', cursive;
  margin-left: 1%;
  font-size: 4vw;
  font-size: calc(14px + (60 - 14) * ((100vw - 300px) / (1600 - 300)));
`;
