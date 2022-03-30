import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "helpers/types";

const initialState: User[] = [];

const searchParamsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      return [...action.payload];
    },
    addUser(state, action: PayloadAction<User>) {
      return [...state, action.payload];
    },
    updateUser(state, action: PayloadAction<User>) {
      const currentState: User[] = [...state];

      const updatedUserIndex = currentState.findIndex(
        (user) => user.id === action.payload.id,
      );
      currentState[updatedUserIndex] = action.payload;

      return currentState;
    },
    deleteUser(state, action: PayloadAction<{ id: number }>) {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } =
  searchParamsSlice.actions;
export default searchParamsSlice.reducer;
