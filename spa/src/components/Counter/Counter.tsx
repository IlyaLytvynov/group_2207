import React from 'react';
import { inject, observer } from 'mobx-react';
import { CounterStore, STORE_NAME } from '../../mobxStore/counter';

interface Props {
	[STORE_NAME]?: CounterStore;
}

@inject(STORE_NAME)
@observer
export class Counter extends React.Component<Props> {
	public render() {
		const { counter } = this.props;
		return <div>
			<button onClick={ () => counter.decrease() }>-</button>
			{ counter.value }
			<button onClick={ () => counter.increase() }>+</button>
		</div>;
	}
}