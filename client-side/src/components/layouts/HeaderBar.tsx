/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function HeaderBar({ navItems }: { navItems: any[] }) {
    return (
        <header className="h-16 flex items-center justify-between border-b bg-white px-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-700">Dashboard</h1>
        </header>
    );
}
