import "styled-components";
import { lightTheme } from "./index";

type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}