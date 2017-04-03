import React, { Component } from 'react';

// components
import Todo from '../../components/Todo';
import { Input } from '../../components/Forms';

// styles
import styles from './Todos.sass';

class Todos extends Component {
    constructor(props) {
        super(props);

        this._input = null;

        // bind `this`
        this.inputRefHandler = this.inputRefHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    inputRefHandler(ref) {
        this._input = ref;
    }

    submitForm(e) {
        e.preventDefault();
        if (this._input && this._input.value) {
            this.props.addTodo(this._input.value);
            this._input.value = '';
        }
    }

    mapTodos(todos) {
        return _.map(todos, (todo) => {
            return <Todo
                {...todo}
                key={todo.id}
                toggleTodo={this.props.toggleTodo}
                removeTodo={this.props.removeTodo}
            />
        });
    }

    render() {
        const { todos, error, loading } = this.props;
        return (
            <div className={styles.container}>
                <form onSubmit={this.submitForm}>
                    <h1 className={styles.heading}>Simple Todo App</h1>
                    <Input
                        name="todo"
                        placeholder="Add a Todo"
                        refHandler={this.inputRefHandler}
                    />
                </form>

                <div className={styles.todos}>
                    <h1 className={styles.heading}>Todos</h1>
                    <div className={styles.infos}>
                        {
                            error
                                ? <p className={styles.error}>{error.message}</p>
                                : ''
                        }
                        {
                            loading
                                ? <p className={styles.loading}>Loading...</p>
                                : ''
                        }
                    </div>
                    <ul className={styles.todosList}>
                        {this.mapTodos(todos)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todos;