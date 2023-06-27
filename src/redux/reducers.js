
import { combineReducers } from 'redux';

const listings = (state = [], action) => {
    switch (action.type) {
        case "ADD_LISTING":
            return [...state, action.value]
        case "REMOVE_LISTING":
            return state.filter((_, idx) => idx !== action.value)
        default:
            return state
    }
};

const updateUser = (state = '', action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        console.log(state, action)
        return action.value;
      default:
        return state;
    }
};

export default combineReducers({ listings, updateUser })