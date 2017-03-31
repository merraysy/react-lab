import React from 'react';

export default (props) => {
    const { id, title, checked, toggleTodo, removeTodo } = props;
    const checkedClass = checked ? ' checked' : '';
    const todoClickHandler = (e) => {
        e.preventDefault();
        toggleTodo(id);
    };
    const removeClickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeTodo(id);
    };
    return (
        <li className={`todo${checkedClass}`} onClick={todoClickHandler}>
            <span className="title">{title}</span>
            <span className="remove" onClick={removeClickHandler}>&times;</span>
        </li>
    );
};