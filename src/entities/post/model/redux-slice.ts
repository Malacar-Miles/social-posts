import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "./types";

const initialState: Post[] = [];

export const postsSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Post[]>) => {
      const dataToSet = action.payload;
      state = dataToSet;
    }
  }
});

export const { set } = postsSlice.actions;