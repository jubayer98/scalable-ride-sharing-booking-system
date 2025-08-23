import CityRideLogo from "@/assets/icons/Logo";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="mx-auto container px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo + tagline */}
                    <div className="space-y-6">
                        <CityRideLogo width={160} height={80} />

                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                            CityRide delivers smart, eco-friendly urban mobility, connecting
                            people with fast, reliable, and sustainable rides tailored for
                            modern city life.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-5">
                            {[
                                { label: "Facebook", href: "#", icon: "M22 12c0-5.523..." },
                                { label: "Instagram", href: "#", icon: "M12.315 2c2.43..." },
                                { label: "Twitter", href: "#", icon: "M8.29 20.251c7.547..." },
                                { label: "GitHub", href: "#", icon: "M12 2C6.477 2..." },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 hover:text-gray-900 transition"
                                >
                                    <span className="sr-only">{item.label}</span>
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d={item.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Company
                        </h3>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="/about" className="hover:text-gray-900 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/meet-the-team" className="hover:text-gray-900 transition">
                                    Meet the Team
                                </a>
                            </li>
                            <li>
                                <a href="/mission-and-vision" className="hover:text-gray-900 transition">
                                    Mission & Vision
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Helpful Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Helpful Links
                        </h3>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="/contact" className="hover:text-gray-900 transition">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-gray-900 transition">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="hover:text-gray-900 transition">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Stay Updated
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Subscribe to our newsletter for updates and offers.
                        </p>
                        <form className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-r-lg cursor-pointer bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-xs text-gray-500">
                    &copy; 2025 CityRide. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
