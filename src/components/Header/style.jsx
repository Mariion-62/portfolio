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
`;

export default SHeader;
