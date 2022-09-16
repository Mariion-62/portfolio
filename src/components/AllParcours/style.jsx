import styled from 'styled-components';

const SAllParcours = styled.div`
  .parcours {
    display: flex;
    justify-content: space-evenly;
  }
  .cardParcours {
    display: flex;
    flex-direction: column;
  }
  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .parcours {
      flex-wrap: wrap;
    }
    .cardParcours {
      .parcours {
        flex-wrap: wrap;
      }
    }
  }
  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .parcours {
      flex-wrap: wrap;
    }
  }
`;

const STitleParcours = styled.div`
  .titleExpPro {
    text-align: center;
    font-size: 2em;
    padding: 0 0 15vh 0;
    font-weight: bolder;
  }
  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .titleExpPro {
      padding: 0 0 5vh 0;
    }
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .titleExpPro {
      padding: 0 0 10vh 0;
    }
  }
`;

export { SAllParcours, STitleParcours };
