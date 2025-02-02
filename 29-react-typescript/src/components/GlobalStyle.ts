import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ChosunCentennial';
    src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'ChosunCentennial';
}

html{
    font-size: 20px;
}
a{
    text-decoration: none;
}

ul, ol{
    list-style: none;
}
`;
