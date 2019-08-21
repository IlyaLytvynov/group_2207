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

export default (theme) =>  createStyles({
  root: {
    textTransform: 'none' as any,
  },
  success: createSkin(theme, PALETTE_ADDITINAL_OPTIONS.SUCCESS, createSheet),
  warning: createSkin(theme, PALETTE_ADDITINAL_OPTIONS.WARNING, createSheet),
  info: createSkin(theme, 'info', createSheet),
  primary: createSkin(theme, 'primary', createSheet),
  error: createSkin(theme, 'error', createSheet),
  secondary: createSkin(theme, 'secondary', createSheet),
  confirm: createSkin(theme, 'confirm', createSheet),
  content: {},
  disabled: {
    boxShadow: 'none !important',
  }
});
