import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Viktor Mashyka', number: '0506644672' },
  { id: 1, name: 'Yurii Mashyka', number: '0506644673' },
  { id: 2, name: 'Roman Voloshyn', number: '0506644674' },
  { id: 3, name: 'Volodymyr Khoptynec', number: '0506644675' },
  { id: 4, name: 'Dmytro Khoptynec', number: '0506644676' },
];

// const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     return [...state, action.payload];
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: { id: nanoid(), name, number, passive: false },
    //     };
    //   },
    // },

    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(newContact) {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact, getVisibleContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
