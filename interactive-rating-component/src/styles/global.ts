import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    font-family: 'Overpass', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyle;
