import { combineReducers } from 'redux';

//reducer imports
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    // reducers you want to persist add to whitelist
    // user is already persisted by firebase, no need to whitelist
    whitelist: ['cart', 'directoryReducer']
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
);

export default persistReducer(persistConfig, rootReducer);