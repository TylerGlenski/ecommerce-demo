import { combineReducers } from 'redux';
// reducer imports
import userReducer from './user/user.reducer';

export default combineReducers(
    {
        user: userReducer
    }
);