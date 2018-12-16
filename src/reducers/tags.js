import { ADD_TAGS } from "../actions/tags";

const INITIAL_STATE = {
  tags: []
};

const tags = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TAGS:
      return {
        ...state,
        tags: [...action.payload.tags]
      };

    default:
      return state;
  }
};

export default tags;
