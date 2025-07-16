import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0rem;
    padding:0rem;
}


body{
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["gray-800"]};
    --webkit-font-smoothin: antialiased
}



`;
