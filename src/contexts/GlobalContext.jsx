import { createContext, useState } from "react";

const DEFAULT_STATE = {
  provinceId: null,
};

export const GlobalContext = createContext(DEFAULT_STATE);

export const GlobalProvider = (props) => {
  const [state, setState] = useState(DEFAULT_STATE);

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
