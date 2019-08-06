import { black, blue, green, pink, red } from './colors.styles';
import { baseFontFamily, fontSizeBase } from './variables.styles';

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  text: string;
  contrastText: string;
}

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  accent: PaletteColor;
  test: string;
}

export interface Theme {
  palette: Palette;
  typo: {
    fontFamily: string;
    fontSize: string;
  };
  header: {
    background: PaletteColor,
    height: number
  }
}

export const theme: Theme = {
  palette: {
    primary: green,
    secondary: pink,
    error: red,
    accent: blue,
    test: 'aqua'
  },
  typo: {
    fontFamily: baseFontFamily.join(','),
    fontSize: fontSizeBase
  },
  header: {
    background: black,
    height: 60
  }
};
