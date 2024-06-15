import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utilities/axiosBaseQuery";
import { Post } from "../types/posts";

export const postsApi = createApi({
  reducerPath: "posts/api",
  baseQuery: axiosBaseQuery({
    baseUrl: "/posts",
  }),
  endpoints: (build) => ({
    getPostsById: build.query<Post[], string>({
      query: (id) => ({
        url: "",
        params: { userId: id },
      }),
    }),
  }),
});

export const { useGetPostsByIdQuery } = postsApi;
