import React from 'react';
import counter from '../../mobxStore/counter';
import { observer } from 'mobx-react';

interface Props {}

@observer
export class Counter extends React.Component<Props> {
	public render() {
		return <div>
			<button onClick={ () => counter.decrease() }>-</button>
			{ counter.value }
			<button onClick={ () => counter.increase() }>+</button>
		</div>;
	}
}