import * as actionTypes from './actionTypes';
 
export const createToDo = (todo) => {
    return {
      type: actionTypes.CREATE_NEW_TODO,
      todo: todo
    }
};

export const deleteToDo = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        id: id
    }
};