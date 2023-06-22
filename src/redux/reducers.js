
import { combineReducers } from 'redux';

const user = (state = null) => state;

const login = (state = null, action) => {
    switch (action.type) {
      case 'SET_LOGIN_STATUS':
        return action.value;
      default:
        return state;
    }
};

const listings = (state = [], action) => {
    switch (action.type) {
        case "ADD_LISTING":
            return [...state, action.value]
        case "REMOVE_LISTING":
            console.log(state)
            return state.filter((_, idx) => idx !== action.value)
        default:
            return state
    }
};

export default combineReducers({ user, login, listings })