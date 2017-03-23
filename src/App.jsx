import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { todoActions } from './actions';

// components
import Todos from './containers/Todos/Todos';

// styles
import './App.sass';

export class App extends Component {
    componentWillMount() {
        this.props.loadTodos();
    }

    componentWillUnmount() {
        this.props.test();
    }

    render() {
        return <Todos
            addTodo={this.props.addTodo}
            toggleTodo={this.props.toggleTodo}
            removeTodo={this.props.removeTodo}
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