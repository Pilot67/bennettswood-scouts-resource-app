import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --joeys : #b65518;
    --cubs : #ffc82e;
    --scouts : #00ae42;
    --venturers : #9e1b32;
    --bw-Red : #ed1c24;
    --bw-Blue: #0e559f;
    --bw-Grey : #bcbdc0;
    --bw-Gold: #ffbd00;
    --bw-Black: #231f20;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
​ol,
ul {
  list-style: none;
}
`;

export default GlobalStyle;
