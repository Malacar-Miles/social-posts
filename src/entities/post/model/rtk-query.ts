import { jsonPlaceholderApi } from "shared/api";
import { type Post } from "./types";

const postsApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "/posts"
    })
  })
});

export const { useGetAllPostsQuery } = postsApi;