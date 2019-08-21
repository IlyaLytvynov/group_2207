import { createStyles, Theme } from '@material-ui/core';
import { createSkin, CreateStylesFn, PALETTE_ADDITINAL_OPTIONS, PaletteOptions } from '../../styles/materialuiTheme';

const createSheet: CreateStylesFn = (theme: Theme, paletteOption: PaletteOptions) => ({
	color: theme.palette[paletteOption].contrastText,
	backgroundColor: theme.palette[paletteOption].main,
	'&:hover': {
		backgroundColor: theme.palette[paletteOption].dark,
		// Reset on touch devices, it doesn't add specificity
		'@media (hover: none)': {
			backgroundColor: theme.palette[paletteOption].main
		}
	}
});

export default (theme: Theme) => createStyles({
	root: {
		background: theme.palette.primary.main
	},
	container: {
		maxWidth: 960,
		margin: '0 auto'
	},
	signInLinkWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	signInLink: {
		color: theme.palette.text.primary,
		border: ''
	},
	success: createSkin(theme, PALETTE_ADDITINAL_OPTIONS.SUCCESS, createSheet),
	warning: createSkin(theme, PALETTE_ADDITINAL_OPTIONS.WARNING, createSheet),
	info: createSkin(theme, 'primary', createSheet),
	primary: createSkin(theme, 'primary', createSheet),
	error: createSkin(theme, 'error', createSheet),
	secondary: createSkin(theme, 'secondary', createSheet),
	confirm: createSkin(theme, 'confirm', createSheet),
});
