import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-brand-b.onrender.com/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "user",
      providesTags: ["User"],
    }),

    login: builder.mutation({
      query: (formData) => ({
        url: "user/login", 
        method: "POST",
        body: formData, 
      }),
    }),
  }),
});

export const { useGetUserQuery, useLoginMutation } = apiSlice;
