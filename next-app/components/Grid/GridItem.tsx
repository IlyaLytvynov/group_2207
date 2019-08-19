import React, { RefObject } from 'react';

import styles from './GridItem.styles';
import withStyles, { WithStyles } from 'react-jss';

interface IGridItemProps {
	id: string;
	url: string;
	description: string;
	likes: number;
	link?: string;
	className?: string,
}


class GridItem extends React.PureComponent<IGridItemProps & WithStyles<typeof styles>> {
	public state = {
		spans: 0
	};

	private imageRef: RefObject<HTMLImageElement> = React.createRef();

	public componentDidMount(): void {
		this.imageRef.current!.addEventListener('load', this.setSpans);
	}

	public componentWillUnmount(): void {
		this.imageRef.current!.removeEventListener('load', this.setSpans);
	}

	public render() {
		const {url, classes} = this.props;
		const {spans} = this.state;

		return <div className={ classes.item } style={ {gridRowEnd: `span ${ spans }`} }>
			<img className={ classes.img } src={ url } alt='' ref={ this.imageRef }/>
		</div>;
	}

	private setSpans = () => {
		const imageHeight = this.imageRef.current!.clientHeight;
		const rawHeight = 10;// Looking to Grid.styles.ts
		const spans = Math.ceil(imageHeight / rawHeight);
		this.setState(state => ({...state, spans}));
	};
}

const StyledComponent = withStyles(styles)(GridItem);

export { StyledComponent as GridItem };
