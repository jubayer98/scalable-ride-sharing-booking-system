import CityRideLogo from "@/assets/icons/Logo";

export default function MissionAndVision() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-zinc-400 text-white">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <CityRideLogo width={160} height={80} className="mx-auto mb-8" />
                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Mission & Vision
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
                        Guiding principles that shape CityRide’s path toward sustainable
                        urban transportation.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8 space-y-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        CityRide’s mission is to create smarter, greener, and more connected
                        transportation solutions. We empower communities to move freely and
                        responsibly while reducing the environmental footprint of urban
                        mobility.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Our vision is to reshape cities into vibrant, sustainable spaces
                        where people and technology work in harmony. We believe in a future
                        where every ride supports cleaner air, less congestion, and a better
                        quality of life.
                    </p>
                </div>
            </section>
        </div>
    );
}
