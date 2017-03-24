import React from 'react';
import { shallow } from 'enzyme';
import { expect, should } from 'chai';

// components
import Todo from '../Todo';

describe('Components', () => {
    describe('<Todo />', () => {
        it('should render successfully', () => {
            const wrapper = shallow(<Todo />);
            expect(wrapper.type()).to.equal('li');
        });
    });
});