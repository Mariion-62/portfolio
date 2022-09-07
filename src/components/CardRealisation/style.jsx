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
    object-fit: contain;
    width: 40vw;
    height: 30vh;
  }
  .contentProject {
    color: var(--color-white);
    text-align: justify;
    padding: 0vh 2vw;
    height: 30vh;
  }
  .problematiqueProject {
    color: var(--color-white);
    text-align: left;
    padding: 3vh 2vw;
    height: 20vh;
  }
  .linkGithub {
    color: var(--color-yellow);
    cursor: pointer;
    &:hover {
      color: var(--color-violet);
    }
  }
`;

export default SCardRealisation;
