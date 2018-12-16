
import {
    ADD_TAGS
} from '../actions/tags';

const INITIAL_STATE = {
tags:[]
};

const tags = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD_TAGS:
        console.log(action.payload.tags)
            return {
                ...state,
                tags: [...action.payload.tags.data]
            };

        default:
            return state;
    }
}

export default tags;