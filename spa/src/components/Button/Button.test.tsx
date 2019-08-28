import React from 'react';
import {Button} from './Button';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button', () => {
	it('renders without crashing', () => {
		expect(shallow(<Button>Click me</Button>).contains('Click me')).toBe(true);
	});
	it('should handle click by passed function', () => {

		const clickHandler = jest.fn();
		const wrapper = mount(<Button onClick={clickHandler}>Click me</Button>);
		wrapper.find('button').simulate('click');
		expect(clickHandler).toBeCalled();
	});
});
