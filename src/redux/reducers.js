import { combineReducers } from 'redux';

const user = (state = null) => state;

// add switch statements in here
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

export default combineReducers({ user, listings })