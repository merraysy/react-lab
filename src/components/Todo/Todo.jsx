import React from 'react';

export default (props) => {
    const { id, title, checked, toggleTodo, removeTodo } = props;
    const todoClickHandler = (e) => {
        e.preventDefault();
        toggleTodo(id);
    };
    const removeClickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeTodo(id);
    };
    // style
    const todoStyle = {
        position: 'relative',
        padding: '1em',
        backgroundColor: '#EEE',
        color: '#333',
        borderBottom: '1px solid #DDD',
        cursor: 'pointer',
        userSelect: 'none',
        // what about pseudo selectors e.g. :last-child ?
        // ==sass
        // &:last-child
        //   margin-bottom: 0
        // ==
        // and also `checked` state style
        // that's why I moved style objects
        // here inside the component to have access
        // to the `checked` prop
        opacity: checked ? '.25' : 1
    };
    const titleStype = {
        textDecoration: checked ? 'line-through' : 'none'
    };
    const removeStyle = {
        fontSize: '2em',
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '.5rem',
        color: '#D55',
        lineHeight: 'normal'
    };
    return (
        <li style={todoStyle} onClick={todoClickHandler}>
            <span style={titleStype}>{title}</span>
            <span style={removeStyle} onClick={removeClickHandler}>&times;</span>
        </li>
    );
};