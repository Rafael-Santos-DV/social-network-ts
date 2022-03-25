import React, { CSSProperties } from "react";
import { Button } from "./style";

interface TypePropsButton {
  text: string;
  style?: CSSProperties | undefined;
  onClick?: () => void;
  disabled?: boolean;
}


const ButtonSubmit: React.FC<TypePropsButton> = ({ text, style, onClick, disabled }) => {
  return <Button disabled={disabled} onClick={onClick} style={style} >{text}</Button>
};


export default ButtonSubmit;
