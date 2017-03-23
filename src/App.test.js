import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({
    todoReducer: function todoReducer(state) {
        return {...state};
    }
});

// components
import { App } from './App';

describe('<App />', () => {
    test('Should call it\'s `loadTodos` method when mounted', () => {
        const mockLoadTodos = jest.fn();
        const wrapper = shallow(<App store={store} loadTodos={mockLoadTodos} />);
        expect(wrapper.name()).toBe('Todos');
        expect(mockLoadTodos).toBeCalled();
    });
});