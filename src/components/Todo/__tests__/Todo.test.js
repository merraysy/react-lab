import React from 'react';
import { shallow, render } from 'enzyme';

// components
import Todo from '../Todo';

describe(<Todo />, () => {
    test('should render successfully', () => {
        const wrapper = shallow(<Todo />);
        expect(wrapper.type()).toBe('li');
    });

    test('should have a class checked when checked prop is passed `true`', () => {
        const wrapper = shallow(<Todo checked={true} />);
        expect(wrapper.props().className).toBe('todo checked');
    });
});