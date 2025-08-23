import { Button } from "@/components/ui/button";
import CityRideLogo from "@/assets/icons/Logo";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
            {/* Logo */}
            <CityRideLogo width={120} height={60} className="mb-6" />

            {/* Message */}
            <h1 className="text-5xl font-extrabold text-red-600">403</h1>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Unauthorized Access
            </h2>
            <p className="mt-3 text-gray-600 max-w-md">
                Sorry, you don’t have permission to access this page.
                Please check your account status or contact support if you believe this is a mistake.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={() => navigate("/")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                    Back to Home
                </Button>
                <Button
                    variant="outline"
                    onClick={() => navigate("/contact")}
                    className="px-6 py-2"
                >
                    Contact Support
                </Button>
            </div>
        </div>
    );
}
