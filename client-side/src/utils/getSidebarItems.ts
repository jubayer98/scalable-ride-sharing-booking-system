import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { IRole } from "@/types";

/**
 * Returns sidebar items depending on the user role
 */
export const getSidebarItems = (userRole: IRole) => {
    switch (userRole) {
        case role.admin:
            return [...adminSidebarItems];
        case role.user:
            return [...userSidebarItems];
        case role.driver:
            return [...driverSidebarItems];
        default:
            return [];
    }
};
