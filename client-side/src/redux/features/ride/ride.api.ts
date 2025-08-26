/* eslint-disable @typescript-eslint/no-explicit-any */
// src/redux/features/ride/ride.api.ts
import { baseApi } from "@/redux/baseApi";
import type { IRide } from "@/types/ride.type";

export const rideApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // ✅ Rider requests a ride
        requestRide: builder.mutation<
            { statusCode: number; message: string; success: boolean; data: IRide },
            {
                pickupLocation: { lat: number; lng: number; address?: string };
                destinationLocation: { lat: number; lng: number; address?: string };
            }
        >({
            query: (data) => ({
                url: "/ride/request",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ["RIDE"],
        }),

        // ✅ Rider gets ride history
        getRideHistory: builder.query<
            { statusCode: number; message: string; success: boolean; data: IRide[] },
            void
        >({
            query: () => ({
                url: "/ride/history",
                method: "GET",
            }),
            providesTags: ["RIDE"],
        }),

        // ✅ Rider cancels ride by ID
        cancelRide: builder.mutation<
            { statusCode: number; message: string; success: boolean },
            { id: string }
        >({
            query: ({ id }) => ({
                url: `/ride/cancel/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["RIDE"],
        }),

        getAvailableRides: builder.query<
            {
                statusCode: number;
                message: string;
                success: boolean;
                data: IRide[];
                meta?: { total: number };
            },
            void
        >({
            query: () => ({
                url: "/driver/available-rides",
                method: "GET",
            }),
            providesTags: ["RIDE"],
        }),

        respondToRide: builder.mutation<
            { statusCode: number; message: string; success: boolean; data?: IRide },
            { rideId: string; action: "accept" | "picked_up" | "in_transit" | "completed" | "cancel" }
        >({
            query: (data) => ({
                url: "/driver/ride/respond",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ["RIDE"],
        }),

        updateRideStatus: builder.mutation<
            { statusCode: number; message: string; success: boolean; data?: IRide },
            { rideId: string; status: "accepted" | "picked_up" | "in_transit" | "completed"; amount?: number }
        >({
            query: ({ rideId, status, amount }) => ({
                url: "/driver/ride/status",
                method: "PATCH",
                data: {
                    rideId,
                    status, // lowercase string, matches backend
                    ...(status === "completed" ? { amount } : {}),
                },
            }),
            invalidatesTags: ["RIDE"],
        }),
        getRidesByAssignedDriver: builder.query<
            { statusCode: number; message: string; success: boolean; data: IRide[] },
            void
        >({
            query: () => ({
                url: "/driver/rides",
                method: "GET",
            }),
            transformResponse: (response: any) => {
                if (!response || typeof response !== "object" || !response.data) {
                    return { ...response, data: [] };
                }
                return response;
            },
            providesTags: ["RIDE"],
        }),
    }),
});

export const {
    useRequestRideMutation,
    useGetRideHistoryQuery,
    useCancelRideMutation,
    useGetAvailableRidesQuery,
    useRespondToRideMutation,
    useUpdateRideStatusMutation,
    useGetRidesByAssignedDriverQuery
} = rideApi;
