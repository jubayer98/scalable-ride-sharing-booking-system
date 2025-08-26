/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useNavigate } from "react-router";
import {
    authApi,
    useLogoutMutation,
    useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { role } from "@/constants/role";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hook";
import type { IRole } from "@/types";

import Loading from "@/components/layouts/Loading";
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarProvider } from "../ui/sidebar";
import SidebarBrand from "./SidebarBrand";
import SidebarNav from "./SidebarNav";
import SidebarFooterContent from "./SidebarFooterContent";
import HeaderBar from "./HeaderBar";
import { getSidebarItems } from "@/utils/getSidebarItems";

export default function DashboardLayout() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const dispatch = useAppDispatch();

    if (isLoading) return <Loading />;

    const userRole: IRole =
        (((data?.data as unknown) as { role?: IRole })?.role as IRole) ??
        role.user;
    const navItems = getSidebarItems(userRole);

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            dispatch(authApi.util.resetApiState());
            toast.success("Logged out successfully!");
            navigate("/login");
        } catch (error) {
            toast.error("Logout failed. Please try again.");
            console.error("Logout failed:", error);
        }
    };

    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <aside className="w-64 border-r bg-gradient-to-b from-slate-100 via-white to-slate-100 backdrop-blur-md shadow-sm flex flex-col">
                    <SidebarContent className="flex-1">
                        <SidebarGroup>
                            <SidebarBrand />
                            <SidebarGroupContent>
                                <SidebarNav navItems={navItems} />
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarFooterContent handleLogout={handleLogout} />
                    </SidebarFooter>
                </aside>

                {/* Main */}
                <div className="flex-1 flex flex-col bg-white">
                    <HeaderBar navItems={navItems} />
                    <main className="flex-1 overflow-auto p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
