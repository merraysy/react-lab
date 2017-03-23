import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
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
        const renderer = ReactTestUtils.createRenderer();
        const mockLoadTodos = jest.fn();
        renderer.render(<App store={store} loadTodos={mockLoadTodos} />);
        // Here I couldn't have access to the components methods
        // to test my `mapStateToProps` and `mapDispatchToProps`
        // so I'll need `Airbnb's Enzyme` to get the instance
        // and traversing the Virtual DOM easily

        // after a lot of researches I finally could fine the
        // method's name, nice Docs FB!!!
        // console.log(renderer.getMountedInstance());
        expect(mockLoadTodos).toBeCalled();
    });
});