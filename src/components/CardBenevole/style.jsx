import styled from 'styled-components';

const SCardBenevole = styled.div`
  .cardBenevole {
    display: flex;
    width: 45vw;
    margin: 0vh 0 10vh 3vw;
  }
  .imgBenevole {
    width: 10vw;
    height: 20vh;
  }
  .allListBenevole {
    text-align: center;
    width: 40vw;
    margin: auto;
    line-height: 3vh;
  }
`;
const SButtonMore = styled.div`
  .buttonMore {
    width: 8vw;
    height: 3vh;
    padding-top: 1vh;
    font-size: 1em;
    border: none;
    border-radius: 50px;
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
    color: var(--color-white);
    font-weight: bolder;
    margin: 20vh 2vw 0 0;
    text-align: center;
    &:hover {
      transition: 2s;
      background-color: #ffcc70;
      background-image: linear-gradient(
        43deg,
        #ffcc70 0%,
        #c850c0 46%,
        #4158d0 100%
      );
    }
  }
  .linkMore {
    text-decoration: none;
  }
`;

export { SCardBenevole, SButtonMore };
