import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "./types";
import { RootState } from "app/providers/redux/redux-store";

const initialState: Post[] = [];

export const cachedPostsSlice = createSlice({
  name: "cachedPosts",
  initialState,
  reducers: {
    addPostsToStore: (state, action: PayloadAction<Post[]>) => {
      const dataToAdd = action.payload;
      // Only add those post items that aren't already in the store
      const existingIds = state.map((post) => post.id);
      const newData = dataToAdd.filter(
        (post) => !existingIds.includes(post.id)
      );
      state = [...state, ...newData];
    },
  },
});

export const { addPostsToStore } = cachedPostsSlice.actions;
export const selectCachedPosts = () => {
  return (state: RootState) => state.cachedPosts;
};
