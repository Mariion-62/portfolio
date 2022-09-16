import styled from 'styled-components';

const SCardHomepage = styled.div`
  .allCards {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    min-height: 68vh;
  }
  .card {
    margin: 5vh 5vw;
  }
  .link {
    text-decoration: none;
  }
  .titleCardHomepage {
    color: var(--color-white);
    text-align: center;
    padding-top: 5vh;
    position: relative;
    width: 30vw;
    font-size: 5vh;
    font-weight: bolder;
  }
  .imgCardHomepage {
    width: 30vw;
    height: 40vh;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .allCards {
      margin-top: 0vh;
      min-height: 75vh;
      display: flex;
      flex-direction: column;
    }
    .card {
      padding: 0vh 0 12vh 0;
    }

    .titleCardHomepage {
      width: 90vw;
      padding-top: 7vh;
    }
    .imgCardHomepage {
      width: 90vw;
      height: 20vh;
    }
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .allCards {
      margin: auto;
      min-height: 80vh;
    }
    .card {
      padding: 0vh 0vw 12vh 2vw;
      width: 40vw;
    }

    .titleCardHomepage {
      margin: auto;
      width: 40vw;
      font-size: 4.5vh;
    }
    .imgCardHomepage {
      width: 40vw;
    }
  }
`;
export default SCardHomepage;
