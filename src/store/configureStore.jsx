// store.js
import { CounterState } from '../reducers/CountReducer';
import { TodosReducer } from '../reducers/TodoReducer';
import { combineReducers, createStore } from 'redux';
const reducer = combineReducers({
  
    count: CounterState,
    todos: TodosReducer,
  
});

export const store= createStore(reducer)
