import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([
    // middlewares
]);
const store = mockStore({
    // initial state
});

// components
import App from './App';

describe('<App />', () => {
    test('Should call it\'s `loadTodos` method when mounted', () => {
        const renderer = ReactTestUtils.createRenderer();
        const loadTodos = jest.fn();
        renderer.render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const output = renderer.getRenderOutput();
        expect(output).toBe([]);
    });
});