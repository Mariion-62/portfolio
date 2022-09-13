import styled from 'styled-components';

const SBtnUp = styled.div`
  .btnUp {
    position: fixed;
    right: 20px;
    bottom: 5px;
    cursor: pointer;
    color: var(--color-violet);
    border: none;
    background-color: transparent;
    &:hover {
      color: var(--color-pink);
    }
  }
`;

export default SBtnUp;
