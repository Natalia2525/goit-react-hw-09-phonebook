import { combineReducers } from 'redux';
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './contacts/contact-reducer';
import userReducer from './user/user-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  user: persistReducer(persistConfig, userReducer),
});
export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
