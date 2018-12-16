
import {
    ADD_QUERY_TAG,
    ADD_QUERY_STRING,
    ADD_CURRENT_PAGE
} from '../actions/pageInfo';

const INITIAL_STATE = {
currentpage:1,
tag:'',
//q is the query string
q:''
};

const pageInfo = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD_QUERY_TAG:
            return {
                ...state,
                tag: action.payload.queryTag
            };

        case ADD_QUERY_STRING:
            return {
                ...state,
                q: action.payload.queryString
            };

        case ADD_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage
            };

        default:
            return state;
    }
}

export default pageInfo;