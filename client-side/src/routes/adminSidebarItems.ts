import type { ISidebarItem } from "@/types";
import { BarChart3, Users, Car } from "lucide-react";
import { lazy } from "react";

// Lazy-loaded admin pages
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const ManageUsers = lazy(() => import("@/pages/admin/ManageUsers"));
const ManageRides = lazy(() => import("@/pages/admin/ManageRides"));
const Analytics = lazy(() => import("@/pages/admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
    {
        to: "/admin/dashboard",
        label: "Dashboard",
        icon: BarChart3,
        component: AdminDashboard,
    },
    {
        to: "/admin/users",
        label: "Users",
        icon: Users,
        component: ManageUsers,
    },
    {
        to: "/admin/rides",
        label: "Rides",
        icon: Car,
        component: ManageRides,
    },
    {
        to: "/admin/analytics",
        label: "Analytics",
        icon: BarChart3,
        component: Analytics,
    },
];
