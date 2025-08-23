import CityRideLogo from "@/assets/icons/Logo";

export default function FAQ() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-zinc-400 text-white">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <CityRideLogo width={160} height={80} className="mx-auto mb-8" />
                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
                        Find answers to the most common questions about CityRide.
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 space-y-8">
                {[
                    {
                        q: "What is CityRide?",
                        a: "CityRide is a smart mobility platform that connects people with eco-friendly and reliable urban transportation solutions.",
                    },
                    {
                        q: "How does CityRide help the environment?",
                        a: "By focusing on shared, electric, and sustainable transportation, CityRide reduces carbon emissions and helps make cities cleaner.",
                    },
                    {
                        q: "Is CityRide available in my city?",
                        a: "We’re expanding rapidly! Check our app or website for the latest list of supported cities.",
                    },
                    {
                        q: "How do I get started?",
                        a: "Simply download the CityRide app, create an account, and you’ll be ready to book your first ride within minutes.",
                    },
                ].map((item, i) => (
                    <div key={i} className="border-b pb-6">
                        <h3 className="text-xl font-semibold text-gray-900">{item.q}</h3>
                        <p className="mt-2 text-gray-700">{item.a}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
