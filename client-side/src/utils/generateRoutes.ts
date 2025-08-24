import type { ISidebarItem } from "@/types";

export const generateRoutes = (sidebarItems: ISidebarItem[]) => {
    return sidebarItems
        .filter((item) => item.component) // only create routes for internal items
        .map((item) => ({
            path: item.to.replace(/^\/user\//, ""), // remove `/user/` prefix for nested routes
            Component: item.component!,
        }));
};
