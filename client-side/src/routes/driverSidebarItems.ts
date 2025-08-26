import type { ISidebarItem } from "@/types";
import { LayoutDashboard, Car, History, BarChart3, User } from "lucide-react";
import { lazy } from "react";

// Lazy-loaded driver pages
const DriverDashboard = lazy(() => import("@/pages/driver/DriverDashboard"));
const RideStatus = lazy(() => import("@/pages/driver/RideStatus"));
const DriverRideHistory = lazy(() => import("@/pages/driver/DriverRideHistory"));
const Earnings = lazy(() => import("@/pages/driver/Earnings"));
const DriverProfile = lazy(() => import("@/pages/driver/DriverProfile"));

export const driverSidebarItems: ISidebarItem[] = [
    {
        to: "/driver/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        component: DriverDashboard,
    },
    {
        to: "/driver/ride-status",
        label: "Ride Status",
        icon: Car,
        component: RideStatus,
    },
    {
        to: "/driver/ride-history",
        label: "Ride History",
        icon: History,
        component: DriverRideHistory,
    },
    {
        to: "/driver/earnings",
        label: "Earnings",
        icon: BarChart3,
        component: Earnings,
    },
    {
        to: "/driver/profile",
        label: "Driver Profile",
        icon: User,
        component: DriverProfile,
    },
];
