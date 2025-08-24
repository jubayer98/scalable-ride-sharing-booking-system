/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Navigate, Outlet, useLocation } from "react-router";
import type { IRole } from "@/types";
import Loading from "@/components/layouts/Loading";

interface ProtectedRouteProps {
    allowedRoles: IRole[];
    redirectTo?: string; // default redirect for not logged in
}

type UserInfoResponse = {
    data?: {
        role?: IRole;
    };
};

export default function ProtectedRoute({
    allowedRoles,
    redirectTo = "/login",
}: ProtectedRouteProps) {
    const { data, isLoading } = useUserInfoQuery(undefined) as {
        data?: UserInfoResponse;
        isLoading: boolean;
    };
    const location = useLocation();

    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }

    const userRole = data?.data?.role as IRole | undefined;

    if (!userRole) {
        // 🚫 Not logged in → redirect to login
        return <Navigate to={redirectTo} replace state={{ from: location }} />;
    }

    if (!allowedRoles.includes(userRole)) {
        // 🚫 Logged in but role not allowed → redirect to Forbidden
        return <Navigate to="/403" replace />;
    }

    // ✅ Allowed → render nested routes
    return <Outlet />;
}
