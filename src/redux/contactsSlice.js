import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, text: 'Viktor Mashyka', passive: false },
  { id: 1, text: 'Yurii Mashyka', passive: false },
  { id: 2, text: 'Roman Voloshyn', passive: false },
  { id: 3, text: 'Volodymyr Khoptynec', passive: false },
  { id: 4, text: 'Dmytro Khoptynec', passive: false },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(text) {
        return {
          payload: { text, id: nanoid(), passive: false },
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        return state.filter(task => task.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
