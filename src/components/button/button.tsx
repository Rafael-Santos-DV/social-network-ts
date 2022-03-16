import React, { CSSProperties } from "react";
import { Button } from "./style";

interface TypePropsButton {
  text: string;
  style?: CSSProperties | undefined;
  onClick?: () => void;
}


const ButtonSubmit: React.FC<TypePropsButton> = ({ text, style, onClick }) => {
  return <Button onClick={onClick} style={style} >{text}</Button>
};


export default ButtonSubmit;
