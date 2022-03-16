import { createGlobalStyle } from "styled-components";
import TypeColors from "../styles/colors";

type darkColor = {
  bgDark: boolean;
}

export const GlobalStyles = createGlobalStyle<darkColor>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Hubballi', cursive;

  }

  html, body {
    height: 100%;
    background-color: ${props => props.bgDark ? TypeColors.colorBlackBackg : TypeColors.colorMainBackg};
  }

`;
