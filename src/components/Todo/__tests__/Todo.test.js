import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

// components
import Todo from '../Todo';

test('<Todo /> should render successfully', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Todo />);
    const output = renderer.getRenderOutput();
    expect(output.type).toBe('li');
});

test('<Todo checked={true} /> should have a class checked', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Todo checked={true} />);
    const output = renderer.getRenderOutput();
    expect(output.props.className).toBe('todo checked');
});