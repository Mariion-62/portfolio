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

  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .cardBenevole {
      width: 95vw;
      margin: 5vh 1vw;
    }
    .imgBenevole {
      width: 15vw;
      height: 10vh;
      padding-top: 3vh;
    }
    .allListBenevole {
      width: 60vw;
      font-size: 0.8em;
      padding-bottom: 1vh;
    }
  }
  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .cardBenevole {
      margin: 5vh 1vw;
      width: 95vw;
    }
    .imgBenevole {
      width: 10vw;
      height: 12vh;
      padding-top: 5vh;
    }
    .allListBenevole {
      font-size: 0.9em;
      width: 70vw;
    }
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
  // MODE MOBILE

  @media only screen and (max-width: 767px) {
    .buttonMore {
      width: 12vw;
      height: 1.5vh;
      padding-top: 1vh;
      margin: 10vh 0 0 0;
      font-size: 0.6em;
    }
  }
  // MODE TABLET

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .buttonMore {
      width: 15vw;
      margin: 8vh 0 0 0;
    }
  }
`;

export { SCardBenevole, SButtonMore };
