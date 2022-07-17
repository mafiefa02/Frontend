import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --primary: hsl(158, 36%, 37%);
    --secondary: rgba(0,0,0,0.5);
}

body {
    background-color: hsl(30, 38%, 92%);
}

p {
    font-size: 14px;
    line-height: 1.7;
}

h1 {
    font-family: "Fraunces", serif;
    font-size: 30px;
}

h3 {
    font-family: "Fraunces", serif;
    font-size: 32px;
    color: hsl(158, 36%, 37%);
}

h5 {
    font-size: 12px;
    font-weight: 700;
}
`;
