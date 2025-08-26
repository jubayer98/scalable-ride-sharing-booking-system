import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Ride",
    price: "৳120",
    desc: "For short city trips. Includes up to 5km, standard car, and basic support.",
    features: [
      "Up to 5km included",
      "Standard car",
      "Basic support",
      "No surge pricing"
    ],
  cta: "Call Now"
  },
  {
    name: "Premium Ride",
    price: "৳220",
    desc: "For longer or more comfortable rides. Up to 15km, premium car, priority support.",
    features: [
      "Up to 15km included",
      "Premium car",
      "Priority support",
      "No surge pricing"
    ],
  cta: "Call Now"
  },
  {
    name: "Executive Ride",
    price: "৳350",
    desc: "For business or luxury travel. Up to 30km, executive car, VIP support, more features.",
    features: [
      "Up to 30km included",
      "Executive car",
      "VIP support",
      "No surge pricing"
    ],
  cta: "Call Now"
  }
];

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen mt-5 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Pricing Plans</h1>
        <p className="text-lg text-gray-600">Choose the ride that fits your needs and budget. Transparent, affordable, and no hidden fees.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="border rounded-2xl shadow-lg p-8 flex flex-col items-center bg-gray-50 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{plan.name}</h2>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">{plan.price}</div>
            <p className="text-gray-600 mb-4">{plan.desc}</p>
            <ul className="text-gray-700 text-left mb-6 w-full max-w-xs mx-auto space-y-2">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {f}
                </li>
              ))}
            </ul>
            <a href="tel:112" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 mt-auto cursor-pointer">
                {plan.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
