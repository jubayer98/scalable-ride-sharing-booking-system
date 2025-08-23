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
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                Component: Home,
                index: true,
            },
            {
                path: "register",
                Component: Register,
            },
            {
                path: "login",
                Component: Login,
            },
            {
                path: "profile",
                Component: withAuth(Profile),
            },
            {
                path: "features",
                Component: Features,
            },
            {
                path: "about",
                Component: About,
            },
            {
                path: "contact",
                Component: Contact,
            },
            {
                path: "meet-the-team",
                Component: MeetTheTeam,
            },
            {
                path: "mission-and-vision",
                Component: MissionAndVision,
            },
            {
                path: "faq",
                Component: FAQ,
            },
            {
                path: "privacy-policy",
                Component: PrivacyPolicy,
            },
            {
                path: "unauthorized",
                Component: Unauthorized,
            },
            {
                path: "*",
                Component: NotFound,
            },
        ],
    },
]);
export default router;