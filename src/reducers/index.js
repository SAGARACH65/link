import { combineReducers } from 'redux';

import tags from './tags'
import links from './links'
import pageInfo from './pageInfo'

export default combineReducers({
    tags,
    links,
    pageInfo
});

