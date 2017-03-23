import _ from 'lodash';

export default function todoReducer(state = { todos: [], error: null, loading: false }, action) {
    const { type, payload } = action;
    const todos = state.todos ? [...state.todos] : [];
    switch (type) {
        case 'TODOS_LOAD_REQ':
            return {...state, loading: true};
        case 'TODOS_LOAD_SUCCESS':
            return {...state, todos: [...todos, ...payload.data], loading: false};
        case 'TODOS_LOAD_ERROR':
            return {...state, error: payload.error, loading: false};
        case 'TODOS_ERROR_HIDE':
            return {...state, error: null};
        case 'TODO_ADD':
            todos.push(payload);
            return {
                ...state,
                todos
            };
        case 'TODO_TOGGLE':
            const index = _.findIndex(todos, { id: payload.id })
            const checked = todos[index].checked;
            _.set(todos, `[${index}].checked`, !checked);
            return {
                ...state,
                todos
            };
        case 'TODO_REMOVE':
            _.remove(todos, { id: payload.id });
            return {
                ...state,
                todos
            };
        default:
            return {...state};
    }
};