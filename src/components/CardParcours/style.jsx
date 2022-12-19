import styled from 'styled-components';

const SCardParcours = styled.div`
  .cardParcours {
    width: 40vw;
    margin: 20px;
    font-size: 1em;
    text-align: center;
    border-radius: 20px;
    box-shadow: -1px -3px 8px 4px var(--color-violet);
    &:hover {
      box-shadow: -1px -3px 8px 4px var(--color-pink);
      .dateParcours,
      .job,
      .enterprise {
        opacity: 0;
      }
      .xpParcours,
      .pictureParcours {
        opacity: 1;
        transition: 1s;
      }
    }
  }
  .dateParcours {
    text-align: center;
    padding: 1vh;
    font-size: 1.5em;
    width: 40vw;
    height: 5vh;
    font-weight: bolder;
    margin: auto;
  }
  .job {
    padding: 1vh;
    height: 5vh;
  }
  .enterprise {
    padding: 1vh;
    font-style: italic;
    height: 3vh;
  }
  .xpParcours {
    padding: 1vh;
    margin-top: -20vh;
    text-align: center;
    opacity: 0;
    height: 30vh;
    .listParcours {
      padding-left: 2vw;
      padding-top: 2vh;
      line-height: 3vh;
    }
  }
  .pictureParcours {
    opacity: 0;
    width: 10vw;
    height: 6vh;
    align-items: center;
    object-fit: contain;
  }

  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .cardParcours {
      width: 90vw;
      border-radius: 20px;
      box-shadow: -1px -3px 8px 4px var(--color-violet);
      margin: 1vh 3.5vw 5vh 3.5vw;
      border: 1px solid red;
    }

    .dateParcours {
      width: 60vw;
      margin: auto;
    }
    .job {
      width: 60vw;
      margin: auto;
    }

    .xpParcours {
      margin-top: 1vh;
      text-align: left;
      padding: 0;
      opacity: 1;
    }
    .pictureParcours {
      width: 50vw;
      height: 7vh;
      opacity: 1;
    }
  }

  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .cardParcours {
      width: 45vw;
      margin: 0vh 1vw 4vh 2.2vw;
      border-radius: 20px;
      box-shadow: -1px -3px 8px 4px var(--color-violet);
    }

    .dateParcours {
      height: 6vh;
    }

    .pictureParcours {
      width: 20vw;
      height: 8vh;
    }
  }
`;

export default SCardParcours;
