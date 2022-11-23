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
  },
});

export const { changeFilter } = filterContactSlice.actions;
export const filterContactReducer = filterContactSlice.reducer;
