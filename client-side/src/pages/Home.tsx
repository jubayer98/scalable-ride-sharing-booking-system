import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-zinc-600 text-white">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                            Smarter. Greener. Faster Rides with <span className="text-yellow-300">CityRide</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-blue-100">
                            A modern ride management system built for Riders, Drivers, and Admins. Safe, reliable, and eco-friendly urban mobility at your fingertips.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Link to="/pricing">
                                <Button size="lg" className="cursor-pointer bg-yellow-400 text-black hover:bg-yellow-500">
                                    Pricing
                                </Button>
                            </Link>
                            <Link to="/become-a-driver">
                                <Button size="lg" variant="outline" className="cursor-pointer bg-blue-600 hover:text-white border-white hover:bg-blue-700">
                                    Become a Driver
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1080&auto=format&fit=crop"
                            alt="CityRide app preview"
                            className="rounded-xl shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="mx-auto max-w-7xl px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Simple steps to get you where you need to go.
                </p>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Request", desc: "Enter your pickup & destination to request a ride instantly.", icon: "🚖" },
                        { title: "Match", desc: "Nearby drivers get your request and accept within seconds.", icon: "🤝" },
                        { title: "Ride", desc: "Track your driver in real-time and enjoy your trip.", icon: "🗺️" },
                    ].map((step, i) => (
                        <div key={i} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                            <div className="text-5xl">{step.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                            <p className="mt-2 text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Features Tailored For Everyone</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        CityRide ensures a seamless experience for Riders, Drivers, and Admins.
                    </p>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                role: "Riders",
                                desc: "Book rides, track your trip, and stay safe with SOS features.",
                            },
                            {
                                role: "Drivers",
                                desc: "Go online, accept rides, manage trips, and track earnings in real time.",
                            },
                            {
                                role: "Admins",
                                desc: "Monitor users, manage rides, and view analytics dashboards for insights.",
                            },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl border shadow hover:shadow-lg transition bg-white"
                            >
                                <h3 className="text-xl font-semibold text-blue-600">{feature.role}</h3>
                                <p className="mt-3 text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="mx-auto max-w-7xl px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            name: "Sophia Lee",
                            feedback: "CityRide makes my daily commute so easy and safe. The SOS button gives me extra peace of mind.",
                            img: "https://randomuser.me/api/portraits/women/44.jpg",
                        },
                        {
                            name: "James Carter",
                            feedback: "As a driver, I love the earnings dashboard. It's transparent and helps me track my progress.",
                            img: "https://randomuser.me/api/portraits/men/22.jpg",
                        },
                        {
                            name: "Aditi Sharma",
                            feedback: "The admin dashboard is super powerful. Managing drivers and riders has never been easier.",
                            img: "https://randomuser.me/api/portraits/women/68.jpg",
                        },
                    ].map((user, i) => (
                        <div key={i} className="p-6 border rounded-xl shadow bg-white">
                            <img
                                src={user.img}
                                alt={user.name}
                                className="mx-auto h-16 w-16 rounded-full object-cover shadow"
                            />
                            <p className="mt-4 text-gray-600 italic">“{user.feedback}”</p>
                            <h4 className="mt-4 font-semibold text-gray-900">{user.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-zinc-600 text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Ready to ride with CityRide?
                    </h2>
                    <p className="mt-4 text-blue-100">
                        Join thousands of riders and drivers shaping the future of urban mobility.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link to="/pricing">
                            <Button size="lg" className="bg-yellow-400 cursor-pointer text-black hover:bg-yellow-500">
                                Pricing
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-blue-600 cursor-pointer hover:text-white border-white hover:bg-blue-700"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
