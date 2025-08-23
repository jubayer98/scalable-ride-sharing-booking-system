import { Button } from "@/components/ui/button";
import CityRideLogo from "@/assets/icons/Logo";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
            {/* Logo */}
            <CityRideLogo width={120} height={60} className="mb-6" />

            {/* Error Code */}
            <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Page Not Found
            </h2>

            {/* Message */}
            <p className="mt-3 text-gray-600 max-w-md">
                Sorry, the page you’re looking for doesn’t exist or may have been moved.
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
