import { axiosInstance } from "@/lib/axios"
import type { BaseQueryFn } from "@reduxjs/toolkit/query"
import type { AxiosError, AxiosRequestConfig } from "axios"

type AxiosBaseQueryArgs = {
    url: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
};

type AxiosBaseQueryError = {
    status: number | string;
    data: unknown;
};

const axiosBaseQuery =
    (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
        async ({ url, method, data, params, headers }) => {
            try {
                const result = await axiosInstance({ url, method, data, params, headers });
                return { data: result.data };
            } catch (axiosError) {
                const err = axiosError as AxiosError;
                return {
                    error: {
                        status: err.response?.status ?? 'FETCH_ERROR',
                        data: err.response?.data ?? err.message,
                    },
                };
            }
        };

export default axiosBaseQuery;