import * as types from "./actiontype";

const initialState = {
    users : [],
    user : {},
    loading: true,
};

const usersReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_USERS :
            return {
                ...state,
                users : action.payload,
                loading : false
            }
        case types.DELETE_USERS :
        case types.ADD_USERS :
            return {
                ...state,
                loading : false
            }
        default :
        return state;
    }
};

export default usersReducers