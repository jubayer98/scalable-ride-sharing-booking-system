import { baseApi } from "@/redux/baseApi";
import type { IChangePasswordRequest, IChangePasswordResponse, ILoginRequest, ILoginResponse, ILogoutResponse, IRegisterRequest, IRegisterResponse, IUserInfoResponse } from "@/types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILoginRequest>({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo, // or "body" if using fetchBaseQuery
            }),
            invalidatesTags: ["USER"],
        }),
        logout: builder.mutation<ILogoutResponse, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),
        register: builder.mutation<IRegisterResponse, IRegisterRequest>({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
        }),
        changePassword: builder.mutation<IChangePasswordResponse, IChangePasswordRequest>({
            query: (userInfo) => ({
                url: "/auth/change-password",
                method: "POST",
                data: userInfo,
                invalidatesTags: ["USER"],
            }),
        }),
        userInfo: builder.query<IUserInfoResponse, void>({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useUserInfoQuery,
    useLogoutMutation,
    useChangePasswordMutation,
} = authApi;
