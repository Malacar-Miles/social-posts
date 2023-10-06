import { jsonPlaceholderApi } from "shared/api";
import { type Post } from "./types";

const postsApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    getPost: builder.query<Post, string | undefined>({
      query: (postId) => `/posts/${postId}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostQuery } = postsApi;
