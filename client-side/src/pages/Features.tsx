import CityRideLogo from "@/assets/icons/Logo";

export default function Features() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-zinc-400 text-white">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <CityRideLogo width={160} height={80} className="mx-auto mb-8" />
                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Powerful Features for Everyone
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
                        CityRide ensures an optimized, role-based experience for Riders, Drivers, and Admins.
                    </p>
                </div>
            </section>

            {/* Features for Riders */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Rider Features
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
                    Hassle-free booking, live tracking, and enhanced safety for every ride.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Easy Booking", desc: "Request rides in seconds with pickup, destination, and fare estimation." },
                        { title: "Ride History", desc: "View past rides with filters for date, fare, and status." },
                        { title: "Profile Management", desc: "Edit your details, change password, and manage payment options." },
                        { title: "Live Tracking", desc: "Track your ride in real time with driver details (optional maps)." },
                        { title: "Safety First", desc: "Emergency SOS button to notify contacts and share live location." },
                    ].map((f, i) => (
                        <div key={i} className="p-6 rounded-xl border shadow hover:shadow-lg transition bg-white">
                            <h3 className="text-lg font-semibold text-blue-600">{f.title}</h3>
                            <p className="mt-2 text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features for Drivers */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                        Driver Features
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
                        Empowering drivers with tools to manage rides, earnings, and availability.
                    </p>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Online/Offline Control", desc: "Go online to receive rides, or offline when unavailable." },
                            { title: "Incoming Requests", desc: "Accept or reject rides based on preference and schedule." },
                            { title: "Active Ride Management", desc: "Update ride statuses from Accepted → Picked Up → Completed." },
                            { title: "Earnings Dashboard", desc: "Track daily, weekly, and monthly income with charts." },
                            { title: "Profile & Vehicle", desc: "Manage vehicle details, contact info, and password." },
                        ].map((f, i) => (
                            <div key={i} className="p-6 rounded-xl border shadow hover:shadow-lg transition bg-white">
                                <h3 className="text-lg font-semibold text-blue-600">{f.title}</h3>
                                <p className="mt-2 text-gray-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features for Admins */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Admin Features
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
                    Advanced tools to oversee users, rides, and analytics.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "User Management", desc: "Search, filter, block/unblock riders, approve or suspend drivers." },
                        { title: "Ride Oversight", desc: "View all rides with filters for date, status, driver, and rider." },
                        { title: "Analytics Dashboard", desc: "Visualize ride volume, revenue trends, and driver activity." },
                        { title: "Search & Filter", desc: "Robust filtering tools across all admin pages." },
                        { title: "Profile Security", desc: "Update admin profile details and password securely." },
                    ].map((f, i) => (
                        <div key={i} className="p-6 rounded-xl border shadow hover:shadow-lg transition bg-white">
                            <h3 className="text-lg font-semibold text-blue-600">{f.title}</h3>
                            <p className="mt-2 text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
