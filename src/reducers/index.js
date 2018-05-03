import { combineReducers } from 'redux';
import repos from './repos';
import pagination from './pagination';

export default combineReducers({
  repos,
  pagination,
});
