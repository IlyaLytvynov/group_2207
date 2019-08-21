import { createMuiTheme, Theme } from '@material-ui/core';
import { blue, green, orange, pink, red, teal } from '@material-ui/core/colors';

export type PaletteOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'confirm' | 'info';

export enum PALETTE_ADDITINAL_OPTIONS {
	SUCCESS = 'success',
	WARNING = 'warning',
	CONFIRM = 'confirm',
	INFO='info'
}

export type CreateStylesFn = (theme: Theme, o: PaletteOptions) => any;
/**
 * Function for generation style sheets with additional palette options colors such as success, warning
 * @param theme Theme - current theme for MUI
 * @param paletteOption PaletteOptions one of selected options for palette name
 * @param createStylesFn CreateStylesFn function that generate specific style sheet
 * */
export const createSkin = (theme: Theme, paletteOption: PaletteOptions, createStylesFn: CreateStylesFn): any => {
	if (!theme.palette[paletteOption]) {
		return createSkin(theme, 'primary', createStylesFn);
	}
	return createStylesFn(theme, paletteOption);
};
export const baseTheme = createMuiTheme({
	palette: {
		primary: teal,
		secondary: pink,
		error: red,

		[PALETTE_ADDITINAL_OPTIONS.SUCCESS]: {
			main: green[500],
			light: green[400],
			dark: green[700],
			contrastText: '#FFF'
		},
		[PALETTE_ADDITINAL_OPTIONS.WARNING]: {
			main: orange[500],
			light: orange[200],
			dark: orange[800],
			contrastText: '#FFF'
		},
		[PALETTE_ADDITINAL_OPTIONS.CONFIRM]: {
			main: blue[500],
			light: blue[200],
			dark: blue[800],
			contrastText: '#FFF'
		},
		[PALETTE_ADDITINAL_OPTIONS.INFO]: {
			main: blue[500],
			light: blue[200],
			dark: blue[800],
			contrastText: '#FFF'
		}
	} as any,
	typography: {
		fontSize: 15,
	} as any,
});



