import { SET_THEME } from "./ThemeTypes";

export const setTheme = (color) => ({
  type: SET_THEME,
  color: color,
});
