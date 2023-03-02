import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/Counter";
import todoReducer from "./Slice/Todo";
import panierReducer from "./Slice/Panier";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    panier: panierReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
