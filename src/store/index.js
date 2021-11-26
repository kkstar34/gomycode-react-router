import {combineReducers, createStore} from 'redux';
import { todosReducer } from './todosReducer';





const store = createStore(
    combineReducers({
        todos : todosReducer,
        filter : (state = 0, action) => state
    })
)


export default store;