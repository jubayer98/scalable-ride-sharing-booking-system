import CityRideLogo from "@/assets/icons/Logo";

export default function SidebarBrand() {
    return (
        <div className="h-16 flex items-center gap-3 justify-center px-2 py-4 mb-8">
            <CityRideLogo width={90} height={80} />
        </div>
    );
}
