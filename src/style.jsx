import { createGlobalStyle } from 'styled-components';

const SGlobal = createGlobalStyle`

:root {

--color-violet: #7068FA;
--color-yellow: #FFD94A;
--color-pink: #ff64b4;
--background-color: #1C2833;
--color-white: #f0f0e4;
font-family: 'Exo', sans-serif;

}
body {
    background-color: var(--background-color);
    color: var(--color-white);
    width: 100%;
    height: 100vh;
}

::-webkit-scrollbar {
    width: 15px;
}
::-webkit-scrollbar-thumb {
    background: linear-gradient(
      43deg,
      #7068fA 0%,
      #ff64b4 46%,
      #ffd94a 100%
    );
    border-radius: 20px;
}


`;

export default SGlobal;
