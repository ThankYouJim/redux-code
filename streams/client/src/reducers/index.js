import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // some imports uses the same name, so add 'as' to differentiate
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  form: formReducer
});