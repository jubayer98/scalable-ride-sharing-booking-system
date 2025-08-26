/* eslint-disable @typescript-eslint/no-explicit-any */
// src/redux/features/driver/driver.api.ts
import { baseApi } from "@/redux/baseApi";
import type { IDriver, IUpdateDriverResponse, IEarningsRecord } from "@/types";

export const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // ✅ Update driver availability (Online / Offline)
        updateAvailability: builder.mutation<IUpdateDriverResponse, { isOnline: boolean }>({
            query: (body) => ({
                url: "/driver/availability",
                method: "PATCH",
                data: body,
            }),
            invalidatesTags: ["DRIVER"],
        }),

        // ✅ Get driver profile
        getDriverProfile: builder.query<
            { statusCode: number; message: string; success: boolean; data: IDriver },
            void
        >({
            query: () => ({
                url: "/driver/profile",
                method: "GET",
            }),
            providesTags: ["DRIVER"],
        }),

        // ✅ Update driver profile (flat fields)
        updateDriverProfile: builder.mutation<
            IUpdateDriverResponse,
            { make: string; model: string; year: number; licensePlate: string }
        >({
            query: (body) => ({
                url: "/driver/profile",
                method: "PATCH",
                data: body, // ✅ directly { make, model, year, licensePlate }
            }),
            invalidatesTags: ["DRIVER"],
        }),

        // ✅ Get earnings history for the driver
        getDriverEarningsHistory: builder.query<
            { statusCode: number; message: string; success: boolean; data: IEarningsRecord[] },
            void
        >({
            query: () => ({
                url: "/driver/earnings",
                method: "GET",
            }),
            transformResponse: (response: any) => {
                if (!response || typeof response !== "object" || !response.data) {
                    return { ...response, data: [] };
                }
                return response;
            },
            providesTags: ["EARNINGS"],
        }),
    }),
});

export const {
    useUpdateAvailabilityMutation,
    useGetDriverProfileQuery,
    useUpdateDriverProfileMutation,
    useGetDriverEarningsHistoryQuery,
} = driverApi;
