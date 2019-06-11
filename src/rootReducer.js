import { combineReducers } from 'redux';
import people from './components/people/peopleReducer';

const rootReducer = combineReducers({
  people
});

export default rootReducer;
