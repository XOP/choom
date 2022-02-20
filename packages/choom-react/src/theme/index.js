import { createContext } from "react";
import theme from 'choom-theme';

const ThemeContext = createContext(theme);
const ThemeProvider = ThemeContext.Provider;

export { ThemeProvider, ThemeContext };
