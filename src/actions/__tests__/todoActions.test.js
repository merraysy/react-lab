import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

// actions
import * as todoActions from '../todoActions';

describe('Actions', () => {
    describe('todoActions', () => {
        describe('addTodo', () => {
            let title = 'todo title';
            let action = todoActions.addTodo(title);

            it('should create an action', () => {
                expect(action).to.exist;
                expect(action).to.have.all.keys('type', 'payload');
            });

            it('should create a todo object and assign it to the payload', () => {
                expect(action.payload).to.have.all.keys('id', 'title', 'checked');
                expect(action.payload.title).to.equal(title);
                expect(action.payload.checked).to.be.false;
            })
        });

        describe('loadTodos', () => {
            it('should call async actions', () => {
                const store = mockStore({ todos: [] });
                store.dispatch(todoActions.loadTodos());
                setTimeout(() => {
                    const actions = store.getActions();
                    expect(actions).to.have.length.of(2);
                    expect(actions).to.include({ type: 'TODOS_LOAD_REQ', payload: null });
                }, 3000);
            });
        });
    });
});