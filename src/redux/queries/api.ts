import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPost: build.query<unknown, { id: number; delay?: number }>({
      query: ({ id, delay }) => ({ url: `posts/${id}?_delay=${delay ?? 0}` }),
    }),
  }),
});

export const { useGetPostQuery } = api;
