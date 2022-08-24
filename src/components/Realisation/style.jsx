import styled from 'styled-components';

const SCardRealisation = styled.div`
  .allCard {
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 50vh;
    justify-content: center;
    align-items: center;
    margin: 10vh 4vw 15vh 4vw;
  }
  .titleProject {
    color: var(--color-violet);
    font-size: 2em;
    padding: 1em;
  }
  .imgProject {
    object-fit: contain;
    width: 40vw;
    height: 30vh;
  }
  .contentProject {
    color: var(--color-white);
    text-align: justify;
    padding: 5vh 2vw;
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
