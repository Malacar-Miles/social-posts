import { postsSlice } from "./model/redux-slice";

export const setAllPosts = postsSlice.actions.set;
export const postsReducer = postsSlice.reducer;