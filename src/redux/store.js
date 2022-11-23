import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persisteContactsdReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisteContactsdReducer,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: persisteContactsdReducer,
//     filter: filterReducer,
//   },
// });
