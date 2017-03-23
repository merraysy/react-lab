import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { todoActions } from './actions';

// components
import Todos from './containers/Todos/Todos';

// styles
import './App.sass';

export class App extends Component {
    constructor(props) {
        super(props);

        // bind `this`
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    componentWillMount() {
        this.loadTodos();
    }

    loadTodos() {
        this.props.loadTodos();
        setTimeout(() => {
            this.props.hideError();
        }, 2000);
    }

    addTodo(title) {
        this.props.addTodo(title);
    }

    toggleTodo(id) {
        this.props.toggleTodo(id);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return <Todos
            addTodo={this.addTodo}
            toggleTodo={this.toggleTodo}
            removeTodo={this.removeTodo}
            todos={this.props.todos}
            loading={this.props.loading}
            error={this.props.error}
        />
    }
}

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading,
    error: state.todoReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    loadTodos: () => (dispatch(todoActions.loadTodos())),
    hideError: () => (dispatch(todoActions.hideError())),
    addTodo: (todo) => (dispatch(todoActions.addTodo(todo))),
    removeTodo: (id) => (dispatch(todoActions.removeTodo(id))),
    toggleTodo: (id) => (dispatch(todoActions.toggleTodo(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);