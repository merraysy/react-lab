import React, { Component } from 'react';

// components
import Todo from '../../components/Todo';
import { Input } from '../../components/Forms';

// style
const containerStyle = {
    maxWidth: 480,
    margin: '0 auto',
    padding: '2em .5em'
};
const headingStyle = {
    paddingBottom: '.5em'
};
const todosStyle = {
    marginTop: '2em'
};
const todosListStyle = {
    listStyle: 'none'
};
const infosStyle = {
    textAlign: 'center',
    marginBottom: '.5em'
};
// notice how much styles we're defining here
// but we still can move them to their own file
// unless we need to tweak some styles based on
// some of the component's states or props
const errorStyle = {
    color: '#D55'
};
const loadingStyle = {
    // how can I define an animation's `@keyframes` e.g. :
    // ==sass
    // @keyframes spin
    //   from
    //     opacity: 1
    //   to
    //     opacity: 0
    // ==
    animation: 'spin 250ms infinite alternate ease-in-out'
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
            <div style={containerStyle}>
                <form onSubmit={this.submitForm}>
                    <h1 style={headingStyle}>Simple Todo App</h1>
                    <Input
                        name="todo"
                        placeholder="Add a Todo"
                        refHandler={this.inputRefHandler}
                    />
                </form>

                <div style={todosStyle}>
                    <h1 style={headingStyle}>Todos</h1>
                    <div style={infosStyle}>
                        {
                            error
                                ? <p style={errorStyle}>{error.message}</p>
                                : ''
                        }
                        {
                            loading
                                ? <p style={loadingStyle}>Loading...</p>
                                : ''
                        }
                    </div>
                    <ul style={todosListStyle}>
                        {this.mapTodos(todos)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todos;