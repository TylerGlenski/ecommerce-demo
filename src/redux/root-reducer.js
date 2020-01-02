import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    // reducers you want to persist add to whitelist
    // user is already persisted by firebase, no need to whitelist
    whitelist: ['cart']
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer
    }
);

export default persistReducer(persistConfig, rootReducer);