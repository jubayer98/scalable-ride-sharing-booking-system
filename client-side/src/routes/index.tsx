// src/routes/index.tsx
import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MeetTheTeam from "@/pages/MeetTheTeam";
import MissionAndVision from "@/pages/MissionAndVision";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import { withAuth } from "@/utils/withAuth";
import ProtectedRoute from "@/utils/protectedRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { role } from "@/constants/role";
import type { IRole } from "@/types";

import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { generateRoutes } from "@/utils/generateRoutes";
import Unauthorized from "@/pages/Unauthorized";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { Component: Home, index: true },
            { path: "register", Component: Register },
            { path: "login", Component: Login },
            { path: "profile", Component: withAuth(Profile) },
            { path: "features", Component: Features },
            { path: "about", Component: About },
            { path: "contact", Component: Contact },
            { path: "meet-the-team", Component: MeetTheTeam },
            { path: "mission-and-vision", Component: MissionAndVision },
            { path: "faq", Component: FAQ },
            { path: "privacy-policy", Component: PrivacyPolicy },
            { path: "403", Component: Unauthorized }, // ✅ use Forbidden route
            { path: "*", Component: NotFound },
        ],
    },

    // ✅ Admin dashboard
    {
        element: <ProtectedRoute allowedRoles={[role.admin as IRole]} />, // no redirectTo
        children: [
            {
                path: "/admin",
                Component: withAuth(DashboardLayout),
                children: [
                    { index: true, element: <Navigate to="/admin/dashboard" /> },
                    ...generateRoutes(adminSidebarItems),
                ],
            },
        ],
    },

    // ✅ Driver dashboard
    {
        element: <ProtectedRoute allowedRoles={[role.driver as IRole]} />,
        children: [
            {
                path: "/driver",
                Component: withAuth(DashboardLayout),
                children: [
                    { index: true, element: <Navigate to="/driver/dashboard" /> },
                    ...generateRoutes(driverSidebarItems),
                ],
            },
        ],
    },

    // ✅ User (Rider) dashboard
    {
        element: <ProtectedRoute allowedRoles={[role.user as IRole]} />,
        children: [
            {
                path: "/user",
                Component: withAuth(DashboardLayout),
                children: [
                    { index: true, element: <Navigate to="/user/dashboard" /> },
                    ...generateRoutes(userSidebarItems),
                ],
            },
        ],
    },
]);

export default router;
