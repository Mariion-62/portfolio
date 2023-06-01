import styled from 'styled-components';

const SCardRealisation = styled.div`
  .allCard {
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 80vh;
    justify-content: center;
    align-items: center;
    margin: 10vh 4vw 5vh 4vw;
  }

  .titleProject {
    color: var(--color-violet);
    font-size: 2em;
    padding: 1em;
    font-weight: bolder;
  }
  .groupTime,
  .groupProject,
  .timeProject {
    display: flex;
    text-align: center;
  }

  .contentGroup,
  .contentTime {
    padding: 0.5vh 1vw 0 0.3vw;
  }
  .imgProject {
    object-fit: cover;
    width: 28vw;
    height: 28vh;
    border-radius: 20px;
    &:hover {
      width: 29vw;
      height: 29vh;
      transition: 1s;
    }
  }
  .problematiqueProject {
    color: var(--color-white);
    text-align: left;
    padding: 3vh 2vw;
    height: 20vh;
  }
  .contentProject {
    color: var(--color-white);
    text-align: justify;
    padding: 0vh 2vw;
    height: 30vh;
  }
  .gitHub {
    display: flex;
    justify-content: space-evenly;
    width: 30vw;
  }
  .ioLogoGithub {
    font-size: 50px;
  }
  .linkGithub {
    display: flex;
    text-decoration: none;
    color: var(--color-yellow);
    cursor: pointer;
    &:hover {
      color: var(--color-pink);
    }
  }
  .textGithub {
    margin: auto;
    padding-right: 1vw;
  }

  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .allCard {
      display: flex;
      width: 90vw;
      height: 150vh;
      justify-content: left;
      margin: 2vh 2vw 2vh 4.5vw;
    }
    .imgProject {
      width: 70vw;
    }
    .gitHub {
      width: 80vw;
      margin-top: 2vh;
    }
    .ioLogoGithub {
      font-size: 30px;
    }
  }
  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .allCard {
      display: flex;
      width: 90vw;
    }
    .imgProject {
      width: 70vw;
    }
    .gitHub {
      width: 80vw;
      margin-top: 2vh;
    }
  }
`;

export default SCardRealisation;
