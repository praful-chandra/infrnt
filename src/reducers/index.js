import { combineReducers } from 'redux';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import curatorReducer from './curatorReducer';


export default combineReducers({
auth : authReducer,
blogs : blogReducer,
curator : curatorReducer
});