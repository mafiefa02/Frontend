import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
    font-family: 'Outfit', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p {
    font-size: 15px;
}
`;

export default GlobalStyle;
