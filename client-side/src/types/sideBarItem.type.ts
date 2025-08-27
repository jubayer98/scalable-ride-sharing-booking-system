/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

export interface ISidebarItem {
    [x: string]: any;
    to: string;
    label: string;
    icon: LucideIcon;
    newTab?: boolean;
    component?: ComponentType<any>;
}