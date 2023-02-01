import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { userReducer } from './user/userSlice';
import { noticesReducer } from './notices/noticesSlice';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        user: userReducer,
        notices: noticesReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);