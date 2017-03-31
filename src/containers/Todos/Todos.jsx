import React, { Component } from 'react';
import Radium from 'radium';

// components
import Todo from '../../components/Todo';
import { Input } from '../../components/Forms';

// styles
const spinKeyframes = Radium.keyframes({
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
}, 'spin');
const styles = {
    container: {
        maxWidth: 480,
        margin: '0 auto',
        padding: '2em .5em'
    },
    heading: {
        paddingBottom: '.5em'
    },
    todos: {
        marginTop: '2em'
    },
    todosList: {
        listStyle: 'none'
    },
    infos: {
        textAlign: 'center',
        marginBottom: '.5em'
    },
    error: {
        color: '#D55'
    },
    loading: {
        animation: 'x 250ms infinite alternate ease-in-out',
        animationName: spinKeyframes
    }
};

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
            console.log(this._input);
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
            <div style={styles.container}>
                <form onSubmit={this.submitForm}>
                    <h1 style={styles.heading}>Simple Todo App</h1>
                    <Input
                        name="todo"
                        placeholder="Add a Todo"
                        refHandler={this.inputRefHandler}
                    />
                </form>

                <div style={styles.todos}>
                    <h1 style={styles.heading}>Todos</h1>
                    <div style={styles.infos}>
                        {
                            error
                                ? <p style={styles.error}>{error.message}</p>
                                : ''
                        }
                        {
                            loading
                                ? <p style={styles.loading}>Loading...</p>
                                : ''
                        }
                    </div>
                    <ul style={styles.todosList}>
                        {this.mapTodos(todos)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Radium(Todos);