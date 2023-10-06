import { postsSlice } from "./model/redux-slice";

export const setAllPosts = postsSlice.actions.set;
export const postsReducer = postsSlice.reducer;

export { useGetAllPostsQuery } from "./model/rtk-query";