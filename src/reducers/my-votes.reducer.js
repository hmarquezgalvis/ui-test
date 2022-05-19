import { createSlice } from '@reduxjs/toolkit';

export const myVotesSlice = createSlice({
  name: 'my-votes',
  initialState: {
    votes: []
  },
  reducers: {
    toggleVote: (state, action) => {
      const exists = state.votes.some(x => x.guid === action.payload.guid);
      
      if (exists) {
        state.votes = state.votes.filter(x => x.guid !== action.payload.guid);
      } else {
        state.votes.push(action.payload);
      }
    },
  }
});

export const { toggleVote } = myVotesSlice.actions;

export default myVotesSlice.reducer;