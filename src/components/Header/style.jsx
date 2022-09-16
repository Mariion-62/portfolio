import styled from 'styled-components';

const SHeader = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
  }
  .right {
    display: flex;
  }
  .iconSocials {
    width: 18vw;
    margin: auto;
  }
  .logoLinkedIn,
  .logoGitHub {
    width: 5vw;
    padding-left: 2vw;
    padding-bottom: 3.5vh;
    &:hover {
      width: 6vw;
      transition: 1s;
    }
  }
  .logoHeader {
    width: 10vw;
    margin-top: -2vh;
  }
  .iconMenuBurger {
    width: 10vw;
  }

  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .logoHeader {
      width: 20vw;
    }
    .iconSocials {
      width: 20vw;
    }
    .logoLinkedIn,
    .logoGitHub {
      width: 7vw;
      padding-top: 1.5vh;
    }
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .logoHeader {
      width: 12vw;
    }
    .iconSocials {
      width: 20vw;
    }
    .logoLinkedIn,
    .logoGitHub {
      width: 6vw;
      padding-top: 1.5vh;
    }
  }
`;

export default SHeader;
