import { configureStore } from '@reduxjs/toolkit';

import roulingsReducer from '../reducers/rouling.reducer';
import myVotesReducer from '../reducers/my-votes.reducer';

export default configureStore({
  reducer: {
    roulings: roulingsReducer,
    profile: myVotesReducer,
  },
});