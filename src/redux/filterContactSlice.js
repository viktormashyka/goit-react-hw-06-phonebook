import { createSlice } from '@reduxjs/toolkit';

const filtersContactInitialState = '';

const filterContactSlice = createSlice({
  name: 'filterContact',
  initialState: filtersContactInitialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return state, action.payload;
      },
    },
    // changeFilter: {
    //   reducer(state, action) {
    //     return state.filter(contact =>
    //       //   contact.name.toLowerCase().includes(filterContact.toLowerCase())
    //       contact.name.toLowerCase().includes(action.payload.toLowerCase())
    //     );
    //   },
    // },
  },
  //   setStatusFilter(state, action) {
  //     return {
  //       ...state,
  //       status: action.payload,
  //     };
  //   },
});

export const { changeFilter } = filterContactSlice.actions;
export const filterContactReducer = filterContactSlice.reducer;
