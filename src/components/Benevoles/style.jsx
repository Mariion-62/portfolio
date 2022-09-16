import styled from 'styled-components';

const SBenevole = styled.div`
  display: flex;

  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const STitleBenevole = styled.div`
  .titleBenevole {
    text-align: center;
    font-size: 2em;
    padding: 0 0 15vh 0;
    margin-top: 5vh;
    font-weight: bolder;
  }

  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .titleBenevole {
      padding: 0 0 4vh 0;
    }
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .titleBenvole {
      padding: 0 0 10vh 0;
    }
  }
`;

export { SBenevole, STitleBenevole };
