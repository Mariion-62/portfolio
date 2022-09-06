import styled from 'styled-components';

const SAllParcours = styled.div`
  .parcours {
    display: flex;
  }
  .cardParcours {
    display: flex;
    flex-direction: column;
  }
`;

const STitleParcours = styled.div`
  .titleExpPro {
    text-align: center;
    font-size: 2em;
    padding: 0 0 15vh 0;
    font-weight: bolder;
  }
`;

export { SAllParcours, STitleParcours };
