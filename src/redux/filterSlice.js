import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = { status: statusFilters.all };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
  setStatusFilter(state, action) {
    return {
      ...state,
      status: action.payload,
    };
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// const changeFilter = evt => {
//   setFilterContacts(evt.currentTarget.value);
// };

//     deleteContact: {
//   reducer(state, action) {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// },
