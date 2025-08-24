import { baseApi } from "@/redux/baseApi";
import type { IGetUsersResponse, IUser } from "@/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get all users
    getUsers: builder.query<IGetUsersResponse, void>({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    // ✅ Update a user by ID
    updateUser: builder.mutation<IUser, { id: string; body: Partial<IUser> }>({
      query: ({ id, body }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: body, 
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
