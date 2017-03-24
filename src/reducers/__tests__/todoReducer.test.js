import todoReducer from '../todoReducer';

describe('todoReducer', () => {
    let state;
    beforeEach(() => {
        state = {
            todos: []
        };
    });

    test('should return the initial state', () => {
        const newState = todoReducer(undefined, {});
        expect(newState).toEqual({
            todos: [],
            error: null,
            loading: false
        });
    });

    test('should not mutate the state', () => {
        const newState = todoReducer(state, {});
        expect(newState).not.toBe(state);
    });

    test('should add a todo', () => {
        const todo = { title: 'todo' };
        const newState = todoReducer(state, { type: 'TODO_ADD', payload: todo });
        expect(newState.todos).toContain(todo);
    });
});