import React from 'react';
import Radium from 'radium';

const Todo = (props) => {
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
    const styles = {
        todo: {
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
            ':last-child': {
                // this is not working
                borderBottom: 'none'
            },
            // I still have to define the styles inside my component
            // to have access to the `checked` prop
            opacity: checked ? .25 : 1
        },
        checked: {
        },
        title: {
            textDecoration: checked ? 'line-through' : 'none'
        },
        remove: {
            fontSize: '2em',
            display: 'inline-block',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '.5rem',
            color: '#D55',
            lineHeight: 'normal'
        }
    };
    return (
        <li style={styles.todo} onClick={todoClickHandler}>
            <span style={styles.title}>{title}</span>
            <span style={styles.remove} onClick={removeClickHandler}>&times;</span>
        </li>
    );
};

export default Radium(Todo);