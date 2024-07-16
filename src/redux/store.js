import { Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/user.reducer";

const logger = createLogger({
    collapsed: true,
});

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    user: userReducer,
    
});

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: () => new Tuple(thunk, logger),
});

const persistor = persistStore(store);



export { persistor,store };
