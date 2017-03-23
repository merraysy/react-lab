import todoReducer from '../todoReducer';

describe('todoReducer', () => {
    let state;
    beforeEach(() => {
        state = {
            todos: []
        };
    });

    test('should return a new state', () => {
        const newState = todoReducer(state, { type: 'TEST', payload: null });
        expect(newState).not.toBe(state);
    });

    test('should add a todo', () => {
        const todo = { title: 'todo' };
        const newState = todoReducer(state, { type: 'TODO_ADD', payload: todo });
        expect(newState.todos).toContain(todo);
    });
});