import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user';
import { menuSlice } from './slices/menu';

export const store = configureStore({
  reducer: {
    userInfo: userSlice.reducer,
    menu: menuSlice.reducer,
  },
});
