import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utilities/axiosBaseQuery";
import { UserType } from "../types/users";

export const usersApi = createApi({
  reducerPath: "users/api",
  baseQuery: axiosBaseQuery({
    baseUrl: "/users",
  }),
  endpoints: (build) => ({
    getUsers: build.query<UserType[], null>({
      query: () => ({
        url: "",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
