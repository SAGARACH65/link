
// import {
//     LOGIN_STATUS
// } from '../actions';

const INITIAL_STATE = {

};

const tags = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        // case LOGIN_STATUS:
        //     return {
        //         ...state,
        //         isLoggedIn: action.payload.isLoggedIn
        //     };

        default:
            return state;
    }
}

export default tags;