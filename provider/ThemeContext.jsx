import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [userId, setUserId] = useState('');

  return (
    <ThemeContext.Provider value={{ userId, setUserId }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
