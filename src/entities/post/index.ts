import {
  cachedPostsSlice,
  selectCachedPosts,
} from "./model/cached-posts-store-slice";

export const cachedPostsReducer = cachedPostsSlice.reducer;
export { selectCachedPosts };
export { loadMorePosts, setPostToComeBackTo} from "./model/cached-posts-store-slice"
export { useGetAllPostsQuery, useGetPostQuery } from "./model/rtk-query";
export type { Post } from "./model/types";
