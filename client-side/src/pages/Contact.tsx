
import { toast } from "sonner";
import CityRideLogo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-zinc-400 text-white">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <CityRideLogo width={160} height={80} className="mx-auto mb-8" />
                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Contact Us
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
                        Have questions or need support? Our team is here to help you.
                    </p>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 grid gap-12 lg:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Reach out to us for any inquiries, support, or feedback about
                        CityRide. We’ll get back to you as soon as possible.
                    </p>
                    <ul className="space-y-4">
                        <li>
                            <strong className="text-gray-900">📍 Address:</strong>{" "}
                            <span className="text-gray-600">
                                123 Main Street, Dhaka, Bangladesh
                            </span>
                        </li>
                        <li>
                            <strong className="text-gray-900">📧 Email:</strong>{" "}
                            <a
                                href="mailto:support@cityride.com"
                                className="text-blue-600 hover:underline"
                            >
                                support@cityride.com
                            </a>
                        </li>
                        <li>
                            <strong className="text-gray-900">📞 Phone:</strong>{" "}
                            <a
                                href="tel:+880123456789"
                                className="text-blue-600 hover:underline"
                            >
                                +880 1234-567-89
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        toast.success("Your message has been sent! We'll get back to you soon.");
                        e.currentTarget.reset();
                    }}
                    className="bg-gray-50 p-8 rounded-xl shadow space-y-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            required
                            rows={5}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Send Message
                    </Button>
                </form>
            </section>
        </div>
    );
}
