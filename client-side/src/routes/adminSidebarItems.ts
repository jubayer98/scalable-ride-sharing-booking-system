import type { ISidebarItem } from "@/types";
import { BarChart3, Users } from "lucide-react";
import { lazy } from "react";

// Lazy-loaded admin pages
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const ManageUsers = lazy(() => import("@/pages/admin/ManageUsers"));

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
    }
];
