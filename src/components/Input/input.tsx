import React from "react";
import { TextArea } from "./style";

interface TypesInput {
  name: string;
  placeholder: string;

}

const InputMessage: React.FC<TypesInput> = ({ name, placeholder }) => {

  return <TextArea name={name} placeholder={placeholder} />;

};

export default InputMessage;
