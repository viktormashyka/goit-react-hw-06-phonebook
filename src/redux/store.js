import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { filterContactReducer } from './filterContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    filterContact: filterContactReducer,
  },
});
