/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/lib/axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";

type AxiosBaseQueryArgs = {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
};

type AxiosBaseQueryError = {
    status: number | string;
    data: { message?: string;[key: string]: any };
};

const axiosBaseQuery =
    (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
        async ({ url, method, data, params, headers }) => {
            try {
                // Always merge Authorization header from localStorage
                const token = typeof window !== 'undefined' ? localStorage.getItem("accessToken") : null;
                const mergedHeaders = {
                    ...(headers || {}),
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                };
                const result = await axiosInstance({ url, method, data, params, headers: mergedHeaders });
                return { data: result.data };
            } catch (axiosError) {
                const err = axiosError as AxiosError;

                return {
                    error: {
                        status: err.response?.status ?? "FETCH_ERROR",
                        data:
                            (err.response?.data as { message?: string }) ??
                            { message: err.message },
                    },
                };
            }
        };

export default axiosBaseQuery;
