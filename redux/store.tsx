import { configureStore } from '@reduxjs/toolkit';
import globalFlagsReducer from '@base-app/redux/slices/globalFlags';

export const store = configureStore({
  reducer: {
    globalFlags: globalFlagsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
