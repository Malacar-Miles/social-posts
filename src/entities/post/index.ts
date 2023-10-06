import { postsSlice } from "./model/redux-slice";

export const setAllPosts = postsSlice.actions.set;
export const postsReducer = postsSlice.reducer;

export { useGetAllPostsQuery, useGetPostQuery } from "./model/rtk-query";