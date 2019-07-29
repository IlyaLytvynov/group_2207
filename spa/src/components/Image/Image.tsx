import * as React from 'react';

import withStyles, { WithSheet } from 'react-jss';
import styles from './Image.styles';
import { Photo } from '../../models';

interface Props {
  photo: Photo;
}

const Image: React.FC<Props & WithSheet<typeof styles>> = ({classes, photo}) => {
  return <div className={classes.root}>
    <img src={photo.urls.regular} alt=''/>
  </div>;
};

const WrappedImage = withStyles(styles)(Image);

export {WrappedImage as Image};
