import _ from 'lodash';

const _todos = [
    {
        id: _.uniqueId(),
        title: 'Buy a watermelon today',
        checked: false
    },
    {
        id: _.uniqueId(),
        title: 'Drink 4 liters of water',
        checked: true
    },
    {
        id: _.uniqueId(),
        title: 'Check the doors before going to bed.',
        checked: false
    },
    {
        id: _.uniqueId(),
        title: 'Check tomorrow\'s weather',
        checked: true
    }
];
const _success = false;

export function loadTodos() {
    return function (dispatch) {
        dispatch({
            type: 'TODOS_LOAD_REQ',
            payload: null
        });
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (_success) {
                    resolve(_todos);
                } else {
                    reject({
                        message: 'Todos not found.'
                    });
                }
            }, 2000);
        }).then((data) => {
            dispatch({
                type: 'TODOS_LOAD_SUCCESS',
                payload: { data }
            });
        }, (error) => {
            dispatch({
                type: 'TODOS_LOAD_ERROR',
                payload: { error }
            });
        });
    };
}

export function hideError() {
    return {
        type: 'TODOS_ERROR_HIDE',
        payload: null
    };
}

export function addTodo(title) {
    return {
        type: 'TODO_ADD',
        payload: {
            id: _.uniqueId(),
            title,
            checked: false
        }
    };
}

export function removeTodo(id) {
    return {
        type: 'TODO_REMOVE',
        payload: { id }
    };
}

export function toggleTodo(id) {
    return {
        type: 'TODO_TOGGLE',
        payload: { id }
    };
}