import { ADD_LINKS } from "../actions/links";

const INITIAL_STATE = {
  links: []
};

const tags = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LINKS:
      return {
        ...state,
        links: [...state.links, ...action.payload.links]
      };

    default:
      return state;
  }
};

export default tags;
