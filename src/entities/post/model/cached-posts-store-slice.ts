import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cachedPosts: 20,
  postToComeBackTo: 1,
};

export const cachedPostsSlice = createSlice({
  name: "cachedPosts",
  initialState,
  reducers: {
    loadMorePosts: (state, action) => {
      const LAST_POST_ID = 100;
      const increment = action.payload;
      state.cachedPosts = Math.min(state.cachedPosts + increment, LAST_POST_ID);
    },
    setPostToComeBackTo: (state, action) => {
      state.postToComeBackTo = action.payload;
    },
  },
});

export const { loadMorePosts, setPostToComeBackTo } = cachedPostsSlice.actions;
export const selectCachedPosts = () => {
  return (state: any) => state.cachedPosts;
};
