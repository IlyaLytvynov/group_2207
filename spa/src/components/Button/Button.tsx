import React, { ButtonHTMLAttributes } from 'react';
import withStyles, { WithStyles } from 'react-jss';

import styles from './Button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props & WithStyles<typeof styles>> = ({ children, className, classes, ...props }) => {
  return <button className={ classes.root } { ...props }>{ children }</button>;
};

const WrappedButton = withStyles(styles)(Button);

export { WrappedButton as Button };
