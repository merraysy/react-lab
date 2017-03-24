import { expect } from 'chai';

// reducers
import todoReducer from '../todoReducer';

describe('Reducers', () => {
    describe('todoReducer', () => {
        const state = {
            todos: []
        };

        it('should not mutate the state', () => {
            const newState = todoReducer(state, { type: 'TEST', payload: null });
            expect(newState).not.to.equal(state);
        });
    });
});