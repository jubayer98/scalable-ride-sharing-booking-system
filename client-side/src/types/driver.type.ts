export interface IEarningsRecord {
    rideId: string;
    amount: number;
    completedAt: string;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/driver.type.ts

// Vehicle info type
export type IVehicleInfo = {
    make: string;
    model: string;
    year: number;
    licensePlate: string;
};

// Main Driver type
export type IDriver = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    approvalStatus: "pending" | "approved" | "suspended";
    isOnline: boolean; // ✅ kept as boolean
    onRide: boolean;   // ✅ also boolean
    vehicleInfo: IVehicleInfo;
    earningsHistory: any[]; // TODO: type properly when schema is known
    createdAt: string;
    updatedAt: string;
};

// API responses
export type IGetDriversResponse = {
    statusCode: number;
    message: string;
    success: boolean;
    data: IDriver[];
    meta?: {
        total: number;
    };
};

export type IUpdateDriverResponse = {
    statusCode: number;
    message: string;
    success: boolean;
    data: IDriver;
};
