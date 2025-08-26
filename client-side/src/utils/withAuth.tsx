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

        // 🚫 Not logged in → always redirect to login
        if (!isLoading && !data?.data?.email) {
            return <Navigate to="/login" replace />;
        }

        // 🚫 Logged in but wrong role → redirect to Forbidden
        if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
            return <Navigate to="/403" replace />;
        }

        // ✅ Otherwise → render component
        return <Component />;
    };
};
