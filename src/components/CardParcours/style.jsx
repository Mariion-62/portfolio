import styled from 'styled-components';

const SCardParcours = styled.div`
  .cardParcours {
    width: 24vw;
    font-size: 1em;
    text-align: center;
    &:hover {
      .xpParcours,
      .pictureParcours {
        opacity: 1;
        transition: 1s;
      }
      .dot {
        color: var(--color-pink);
      }
    }
  }
  .dateParcours {
    text-align: center;
    padding: 1vh;
    font-size: 1.5em;
  }
  .dot {
    align-items: center;
    width: 25vw;
    padding: 3vh 0;
    cursor: pointer;
  }
  .job {
    padding: 1vh;
    height: 4vh;
  }
  .enterprise {
    padding: 1vh;
    font-style: italic;
    height: 3vh;
  }
  .xpParcours {
    padding: 1vh;
    text-align: left;
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
`;

export default SCardParcours;
