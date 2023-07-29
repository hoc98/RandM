import { configureStore } from '@reduxjs/toolkit';
import UserSearchSlice from './slice/UserSearchSlice';


const store = configureStore({
  reducer: {
    userSearch: UserSearchSlice,
  },
});

export default store;