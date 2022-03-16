import React, { createContext } from "react";

interface darkModelMode {
  darkModeModel: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContextDarlModelMode = createContext<darkModelMode>({ darkModeModel: false, setDark: React.useState });

export default ContextDarlModelMode;
