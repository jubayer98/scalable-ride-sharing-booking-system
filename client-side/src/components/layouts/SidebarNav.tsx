/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export default function SidebarNav({ navItems }: { navItems: any[] }) {
    const location = useLocation();

    return (
        <SidebarMenu>
            {navItems.map(({ to, label, icon: Icon, newTab }) => {
                const isActive = location.pathname === to && !newTab;
                return (
                    <SidebarMenuItem key={to}>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${isActive
                                    ? "border-l-4 border-blue-600 bg-blue-50 text-blue-700 font-medium"
                                    : "text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            {newTab ? (
                                <a href={to} target="_blank" rel="noopener noreferrer">
                                    <Icon className="h-4 w-4" />
                                    <span>{label}</span>
                                </a>
                            ) : (
                                <Link to={to}>
                                    <Icon className="h-4 w-4" />
                                    <span>{label}</span>
                                </Link>
                            )}
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                );
            })}
        </SidebarMenu>
    );
}
