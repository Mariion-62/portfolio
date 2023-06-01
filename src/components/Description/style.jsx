import styled from 'styled-components';

const SDescription = styled.div`
  .contentDescription {
    justify-content: center;
    width: 45vw;
    margin: 8vh auto 0 auto;
    padding: 8vh 0 15vh 0;
    text-align: center;
    font-size: 1.2em;
    line-height: 1.3em;
  }
  .iconeOrdi {
    margin: -65vh 0 0 20vw;
    width: 60vw;
    height: 82vh;
  }

  .avatar {
    margin: -55vh 0 0 4.4vw;
    width: 45vh;
  }
  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .contentDescription {
      font-size: 1em;
      width: 90vw;
    }
    .iconeOrdi {
      display: none;
    }
    .avatar {
      display: none;
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
