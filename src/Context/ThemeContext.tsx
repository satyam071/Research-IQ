import React, { createContext, useState, type ReactNode } from "react";

type Theme = "Light" | "Dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContextData =
  createContext<ThemeContextType | null>(null);

interface Props {
  children: ReactNode;
}

const ThemeContext: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("Dark");

  return (
    <ThemeContextData.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContextData.Provider>
  );
};

export default ThemeContext;