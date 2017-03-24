import React from 'react';

// styles
import styles from './Todo.sass';

console.log(styles);

export default (props) => {
    const { id, title, checked, toggleTodo, removeTodo } = props;
    const checkedClass = checked ? ` ${styles.checked}` : '';
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
        <li className={`${styles.todo}${checkedClass}`} onClick={todoClickHandler}>
            <span className={styles.title}>{title}</span>
            <span className={styles.remove} onClick={removeClickHandler}>&times;</span>
        </li>
    );
};