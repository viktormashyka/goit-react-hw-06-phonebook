import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterContactReducer } from './filterContactSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const persisteContactsdReducer = persistReducer(persistConfig, contactsReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterContact: filterContactReducer,
  },
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//     filterContact: filterContactReducer,
//   },
// });
