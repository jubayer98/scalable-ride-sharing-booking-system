// src/types/ride.type.ts

export type RideStatus =
    | "requested"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "completed"
    | "cancelled";


export type ILocation = {
    lat: number;
    lng: number;
    address?: string;
};

export type IRideTimestamps = {
    requested?: string;   // ISO date string
    accepted?: string;
    picked_up?: string;
    in_transit?: string;
    completed?: string;
    cancelled?: string;
};

export type IRide = {
    _id: string;
    rider: string;          // Rider userId
    driver?: string;        // Driver userId (optional until accepted)
    pickupLocation: ILocation;
    destinationLocation: ILocation;
    status: RideStatus;
    timestamps?: IRideTimestamps;
    amount?: number;
    createdAt?: string;
    updatedAt?: string;
};

// API responses

export type IRequestRideResponse = {
    statusCode: number;
    message: string;
    success: boolean;
    data: IRide;
};

export type IGetRideHistoryResponse = {
    statusCode: number;
    message: string;
    success: boolean;
    data: IRide[];
};

export type ICancelRideResponse = {
    statusCode: number;
    message: string;
    success: boolean;
};
