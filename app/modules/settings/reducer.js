import * as t from './actionTypes';

let initialState = { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.UPDATE_SETTINGS:
            const settings = action.data;
            state = Object.assign({}, state, { settings: data });
            return state;

        default:
            return state;
    }
};

export default authReducer;