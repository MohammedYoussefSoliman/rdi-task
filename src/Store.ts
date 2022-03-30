import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from "app/State/usersSlice";

const rootReducer = combineReducers({
  users: usersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
