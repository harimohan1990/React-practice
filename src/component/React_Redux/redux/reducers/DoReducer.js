import * as actionTypes from '../actions/actionTypes';
 
export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_TODO:
      return [
        ...state,
        Object.assign({}, action.todo)
      ];
      case actionTypes.REMOVE_TODO:
      return state.filter((i) => i !== action.id);
      default:
            return state;
    }
  }