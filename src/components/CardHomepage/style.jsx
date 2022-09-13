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
`;
export default SCardHomepage;
