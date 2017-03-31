import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { todoActions } from './actions';

// containers
import Todos from './containers/Todos';

// style
// problem here:
// I can't define `global` styles e.g. reset styles :
// ==sass
// body
//   font-size: 14px
//   font-family: 'Helvetica', Arial, sans-serif
// 
//   *
//     margin: 0
//     padding: 0
//     box-sizing: border-box
// ==
// so I'll have to do it with javascript or
// include a `global.css` file in the `index.html`
// head or something.
const style = {};
const body = document.querySelector('body');
const allElements = body.querySelectorAll('*');
body.style.fontSize = 14;
body.style.fontFamily = `'Helvetica', Arial, sans-serif`;
// what is this ??
// not even working, it doesn't select the DOM elements
// created by react even if I put it in `componentDidMount`
allElements.forEach((element) => {
    element.style.margin = 0;
    element.style.padding = 0;
    element.style.boxSizing = 'border-box';
});

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