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
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Register from "@/pages/Register";
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
        ],
    },
]);
export default router;