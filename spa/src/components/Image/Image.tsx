import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Image.styles';
import { Photo } from '../../models';

interface Props {
  photo: Photo;
}

const Image: React.FC<Props & WithStyles<typeof styles>> = ({classes, photo}) => {
  return <div className={classes.root}>
    <img src={photo.urls.regular} alt=''/>
  </div>;
};

const WrappedImage = withStyles(styles)(Image);

export {WrappedImage as Image};
