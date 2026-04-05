import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./modules/core/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./modules/core/design-system/theme";
import { Toast } from "./modules/core/design-system/Toast";

export default function App() {

  const [theme] = useState("light");

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ currentTheme }>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Toast />
      </BrowserRouter>
    </ThemeProvider>
  )
}