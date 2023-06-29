import { combineReducers } from 'redux';
import todo from './DoReducer';
 
export default combineReducers({
    todo: todo
});