import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import MUIButton, { ButtonProps as MUIButtonProps } from '@material-ui/core/Button';

import styles from './Button.styles';
import { PaletteOptions } from '../../styles/materialuiTheme';

interface ButtonProps {
  href?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  color: PaletteOptions;
}

const Button: React.FC<ButtonProps & MUIButtonProps & WithStyles<typeof styles>> = ({classes, color, children, href, onClick, ...props}) => {
  const renderContent = () => <span className={ classes.content }>{ children }</span>;
  return <MUIButton
    variant={ 'contained' }
    { ...props }
    classes={ {
      disabled: classes.disabled,
      root: classes![color],
      sizeLarge: classes.sizeLarge,
      sizeSmall: classes.sizeSmall
    } }
    onClick={ onClick }>
    { renderContent() }
  </MUIButton>;
};

const WrappedButton: any = withStyles<any>(styles)(Button);

export { WrappedButton as Button };