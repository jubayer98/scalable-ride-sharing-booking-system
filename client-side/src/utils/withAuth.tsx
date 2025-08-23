import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { IRole } from "@/types/role.type";
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";

export const withAuth = (Component: ComponentType, requiredRole?: IRole) => {
    return function AuthWrapper() {
        const { data, isLoading } = useUserInfoQuery(undefined) as {
            data?: { data?: { email?: string; role?: IRole } };
            isLoading: boolean;
        };

        if (!isLoading && !data?.data?.email) {
            return <Navigate to="/login" />;
        }

        if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
            return <Navigate to="/unauthorized" />;
        }

        return <Component />;
    };
};