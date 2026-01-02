import "styled-components";
import { lightTheme } from "./light";

type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}