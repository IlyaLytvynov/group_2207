import React from 'react';
import { GridItem } from './GridItem';
import { Photo } from '../../models';
import {v4 as uuid} from 'uuid';
import styles from './Grid.styles';
import withStyles, { WithStyles } from 'react-jss';

interface Props {
	images: Array<Photo>;
}

class Grid extends React.PureComponent<Props & WithStyles<typeof styles>> {
	public render() {
		const {images, classes} = this.props;
		return <div className={ classes.grid }>
			<div className={classes.content}>
				{
					images.map(item => {
						const {description, urls, likes, id} = item;
						return <GridItem
              key={uuid()}
							className={ 'grid__item' }
							id={ id }
							description={ description }
							url={ urls.small }
							likes={ likes }/>;
					})
				}
			</div>
		</div>;
	}
}

const StyledComponent = withStyles(styles)(Grid);

export { StyledComponent as Grid };
