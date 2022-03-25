import React from "react";
import { TextArea } from "./style";

interface TypesInput {
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputMessage: React.FC<TypesInput> = ({ name, placeholder, onChange, value }) => {

  return <TextArea value={value} name={name} placeholder={placeholder} onChange={onChange} />;

};

export default InputMessage;
