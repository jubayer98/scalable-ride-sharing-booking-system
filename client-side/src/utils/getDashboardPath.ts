import { role } from "@/constants/role";
import type { IRole } from "@/types";

export const getDashboardPath = (userRole?: IRole) => {
    switch (userRole) {
        case role.user:
            return "/user";
        case role.driver:
            return "/driver";
        case role.admin:
            return "/admin";
        default:
            return "/";
    }
};
