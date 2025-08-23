import CityRideLogo from "@/assets/icons/Logo";

export default function PrivacyPolicy() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-zinc-400 text-white">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <CityRideLogo width={160} height={80} className="mx-auto mb-8" />
                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
                        Your privacy matters. Here’s how CityRide protects your data and
                        keeps your information safe.
                    </p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 space-y-8 text-gray-700 text-lg leading-relaxed">
                <p>
                    CityRide is committed to safeguarding your personal information. We
                    collect only the data necessary to provide our services and enhance
                    your experience.
                </p>

                <h2 className="text-xl font-bold text-gray-900">1. Data We Collect</h2>
                <p>
                    We may collect personal details such as your name, email address,
                    payment information, and location data to ensure smooth ride booking
                    and service improvement.
                </p>

                <h2 className="text-xl font-bold text-gray-900">2. How We Use Data</h2>
                <p>
                    Data is used to provide ride services, improve user experience, ensure
                    security, and develop new features. We never sell your personal data
                    to third parties.
                </p>

                <h2 className="text-xl font-bold text-gray-900">3. Data Security</h2>
                <p>
                    We implement industry-standard security measures to protect your data
                    from unauthorized access, misuse, or disclosure.
                </p>

                <h2 className="text-xl font-bold text-gray-900">4. Your Rights</h2>
                <p>
                    You have the right to access, update, or delete your personal
                    information. Contact our support team for assistance.
                </p>

                <p className="mt-8 text-gray-600">
                    Last updated: January 2025. For questions, reach us at{" "}
                    <a
                        href="mailto:privacy@cityride.com"
                        className="text-blue-600 hover:underline"
                    >
                        privacy@cityride.com
                    </a>
                    .
                </p>
            </section>
        </div>
    );
}
