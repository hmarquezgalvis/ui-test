import { createSlice } from '@reduxjs/toolkit';

export const roulingsSlice = createSlice({
  name: 'roulings',
  initialState: {
    items: []
  },
  reducers: {
    setRoulingList: (state, action) => {
      // console.log('setRoulingList', state, action.payload);
      state.items = action.payload;
    },
  },
});

export const { setRoulingList } = roulingsSlice.actions;

export default roulingsSlice.reducer;