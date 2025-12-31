import type { DefaultTheme } from "styled-components/dist/types";

export const lightTheme = {
  background: "#f6f6f6",
  surface: "#ffffff",
  surfaceSecondary: "#f5f5f5s",

  textPrimary: "#333333",
  textSecondary: "#444444",

  border: "#e1e1e1",
  borderLight: "#dddddd",
  inputBorder: "#dcdcdc",

  primary: "#4cc9f0",
  primaryHover: "#42b4d8",

  shadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
};

export const darkTheme: DefaultTheme = {
  background: "#121212",
  surface: "#1d1d1d",
  surfaceSecondary: "#1e1e1e",

  textPrimary: "#f1f1f1",
  textSecondary: "#c7c7c7",

  border: "#2c2c2c",
  borderLight: "#3a3a3a",
  inputBorder: "#454545",

  primary: "#4cc9f0",
  primaryHover: "#3aa6c2",

  shadow: "0 4px 18px rgba(0, 0, 0, 0.4)",
};



export type Theme = typeof lightTheme;