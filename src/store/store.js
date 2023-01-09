import { configureStore } from '@reduxjs/toolkit';

import { subFormReqSlice } from './reducers/subFormReqSlice';

const store = configureStore({
  reducer: {
    [subFormReqSlice.reducerPath]: subFormReqSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subFormReqSlice.middleware),
});

export default store;
