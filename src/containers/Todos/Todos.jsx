import React, { Component } from 'react';

// components
import Todo from '../../components/Todo';
import { Input } from '../../components/Forms';

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
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <h1 className="heading">Simple Todo App</h1>
                    <Input
                        name="todo"
                        placeholder="Add a Todo"
                        refHandler={this.inputRefHandler}
                    />
                </form>

                <div className="todos">
                    <h1 className="heading">Todos</h1>
                    <div className="infos">
                        {
                            error
                                ? <p className="error">{error.message}</p>
                                : ''
                        }
                        {
                            loading
                                ? <p className="loading">Loading...</p>
                                : ''
                        }
                    </div>
                    <ul className="todos-list">
                        {this.mapTodos(todos)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todos;