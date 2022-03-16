import styled from "styled-components";
import TypesColors from "../../styles/colors";


export const Button = styled.button`
  width: 100%;
  max-width: 100px;
  box-shadow: 0px 0px 5px ${TypesColors.colorMain};
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  color: ${TypesColors.colorWhite};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 200ms, color 200ms, box-shadow 200ms;
  letter-spacing: 2px;
  background-color: ${TypesColors.colorMain};

  &:hover {
    background-color: ${TypesColors.colorWhite};
    color: ${TypesColors.colorMain};
  };

`;
