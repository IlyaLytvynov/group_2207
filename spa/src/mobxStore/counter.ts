import { action, observable } from 'mobx';

export interface CounterStore {
	value: number;
	increase: () => void;
	decrease: () => void;
}

class Counter {
	@observable
	public value: number = 0;

	public increase() {
		this.value += 1;
	}

	@action
	public decrease() {
		this.value -= 1;
	}

	@action
	public clear() {
		this.value = 0;
	}
}

const counterInstance = new Counter();
export default counterInstance;