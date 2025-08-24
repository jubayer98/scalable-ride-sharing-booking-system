import { Button } from "@/components/ui/button";
import { Mail, LogOut } from "lucide-react";

export default function SidebarFooterContent({
    handleLogout,
}: {
    handleLogout: () => void;
}) {
    return (
        <div className="flex flex-col gap-3 px-2 py-4 text-xs text-slate-500 border-t">
            <a href="mailto:support@cityride.com" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="ghost"
                    className="cursor-pointer w-full justify-start gap-2 rounded hover:bg-blue-50 text-sm"
                >
                    <Mail className="text-green-600 h-4 w-4" />
                    Support
                </Button>
            </a>
            <Button
                onClick={handleLogout}
                aria-label="Logout"
                variant="ghost"
                className="cursor-pointer w-full justify-start gap-2 rounded hover:bg-red-50 text-sm"
            >
                <LogOut className="text-red-600 h-4 w-4" />
                Logout
            </Button>
            <span>© CityRide, 2025 • All rights reserved</span>
        </div>
    );
}
