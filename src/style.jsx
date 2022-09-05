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
    height: 100%;
}
`;

export default SGlobal;
