export const ADD_QUERY_TAG = 'ADD_QUERY_TAG';
export const ADD_QUERY_STRING = 'ADD_QUERY_STRING';
export const ADD_CURRENT_PAGE = 'ADD_CURRENT_PAGE';

export const addCurrentPage = currentPage => ({
  type: ADD_CURRENT_PAGE,
  payload: { currentPage }
});

export const addQueryString = queryString => ({
  type: ADD_QUERY_STRING,
  payload: { queryString }
});

export const addQueryTag = queryTag => ({
  type: ADD_QUERY_TAG,
  payload: { queryTag }
});
