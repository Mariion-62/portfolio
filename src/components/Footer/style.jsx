import styled from 'styled-components';

const SFooter = styled.div`
  bottom: 0;
  width: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: -3px -10px 10px 1px var(--color-violet);
  height: 7vh;
  .footer {
    display: flex;
    justify-content: space-evenly;
    padding: 2vh 2vw 0 2vw;
    line-height: 3vh;
    font-weight: bolder;
  }
  .contact {
    text-decoration: none;
  }
  .logoMail {
    color: var(--color-white);
    &:hover {
      color: var(--color-yellow);
    }
  }
`;

export default SFooter;
