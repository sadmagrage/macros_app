import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/themes";

export default function App() {

  const [theme] = useState("light");

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ currentTheme }>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}