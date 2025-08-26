import type { ISidebarItem } from "@/types";
import { LayoutDashboard, Car, History, ShieldAlert } from "lucide-react";
import { lazy } from "react";

// Lazy-loaded rider pages
const UserDashboard = lazy(() => import("@/pages/user/UserDashboard"));
const RequestRide = lazy(() => import("@/pages/user/RequestRide"));
const RideHistory = lazy(() => import("@/pages/user/RideHistory"));
const Emergency = lazy(() => import("@/pages/user/Emergency"));

export const userSidebarItems: ISidebarItem[] = [
    {
        to: "/user/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        component: UserDashboard,
    },
    {
        to: "/user/request-ride",
        label: "Request Ride",
        icon: Car,
        component: RequestRide,
    },
    {
        to: "/user/ride-history",
        label: "Ride History",
        icon: History,
        component: RideHistory,
    },
    {
        to: "/user/emergency",
        label: "Emergency",
        icon: ShieldAlert,
        component: Emergency,
    },
];
