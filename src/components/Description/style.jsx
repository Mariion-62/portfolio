import styled from 'styled-components';

const SDescription = styled.div`
  .contentDescription {
    justify-content: center;
    width: 55vw;
    margin: 5vh auto;
    padding: 2vh 0 15vh 0;
    text-align: center;
    font-size: 1.2em;
    line-height: 1.3em;
  }
  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .contentDescription {
      font-size: 1em;
      width: 85vw;
    }
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .contentDescription {
      font-size: 1.1em;
      width: 75vw;
    }
  }
`;

export default SDescription;
