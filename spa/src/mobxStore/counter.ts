import { action, computed, observable } from 'mobx';

export const STORE_NAME = 'counter';

export interface CounterStore {
	value: number;
	hexValue: string;
	increase: () => void;
	decrease: () => void;
}

export class Counter implements CounterStore {
	@observable public value: number = 0;

	@computed get hexValue() {
		return this.value.toString(16);
	}

	@action public increase() {
		this.value += 1;
	}

	@action public decrease() {
		this.value -= 1;
	}

	@action public clear() {
		this.value = 0;
	}
}

export class FakeCounter implements CounterStore {
	public value: number = 0;

	get hexValue() {
		return 'asdasdasd';
	}

	public increase() {
		this.value += 10500;
	}

	public decrease() {
		this.value -= 1;
	}
	public clear() {
		this.value = 0;
	}
}
