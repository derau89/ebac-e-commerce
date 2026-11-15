import { configureStore } from '@reduxjs/toolkit';
import guidesReducer from './guidesSlice';

const store = configureStore({
  reducer: {
    guides: guidesReducer,
  },
});

export default store;