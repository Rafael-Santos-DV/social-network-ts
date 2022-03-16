import React from "react";
import { Input } from "./style";

interface TypesInput {
  type: string;
  name: string;
  placeholder: string;

}

const InputMessage: React.FC<TypesInput> = ({ type, name, placeholder }) => {

  return <Input type={type} name={name} placeholder={placeholder} />;

};

export default InputMessage;
