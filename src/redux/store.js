import { Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/user.reducer";
import postReducer from "./post/post.reducer";
import notificationReducer from "./notification/notification.reducer";
import messageReducer from "./message/message.reducer";
import applicationReducer from "./application/application.reducer";


const logger = createLogger({
    collapsed: true,
});

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    notification: notificationReducer,
    message: messageReducer,
    application: applicationReducer,
    
});

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: () => new Tuple(thunk, logger),
});

const persistor = persistStore(store);



export { persistor,store };
