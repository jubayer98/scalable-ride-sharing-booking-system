import type { IRole } from "@/types"; // adjust import path

export type IUser = {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    role: IRole;
    isDeleted: boolean;
    isActive: "ACTIVE" | "INACTIVE" | "BLOCKED"; // if your backend only has these states
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
};

export type IGetUsersResponse = {
    statusCode: number;
    message: string;
    success: boolean;
    data: IUser[];
    meta: {
        total: number;
    };
};
