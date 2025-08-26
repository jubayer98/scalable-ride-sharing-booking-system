import { Button } from "@/components/ui/button";

export default function BecomeADriver() {
  return (
    <div className="mt-5 bg-white min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Become a CityRide Driver</h1>
        <p className="text-lg text-gray-600 mb-6">
          Join CityRide and start earning by driving in your city. Follow these simple steps to get started:
        </p>
        <ol className="text-left max-w-xl mx-auto space-y-6 text-gray-800">
          <li>
            <span className="font-bold text-blue-700">1. Create a User Account:</span>
            <div className="ml-6 mt-1 text-gray-600">Sign up as a user on CityRide. You’ll need a valid email and phone number.</div>
          </li>
          <li>
            <span className="font-bold text-blue-700">2. Prepare Your Documents:</span>
            <div className="ml-6 mt-1 text-gray-600">Gather the following documents:
              <ul className="list-disc ml-8 mt-1">
                <li>Valid driving license</li>
                <li>Vehicle registration papers</li>
                <li>National ID or Passport</li>
                <li>Recent photograph</li>
              </ul>
            </div>
          </li>
          <li>
            <span className="font-bold text-blue-700">3. Send Your Request:</span>
            <div className="ml-6 mt-1 text-gray-600">
              Email your documents to <a href="mailto:support@cityride.com" className="text-blue-600 underline">support@cityride.com</a> with the subject "Driver Application".
            </div>
          </li>
          <li>
            <span className="font-bold text-blue-700">4. Approval Process:</span>
            <div className="ml-6 mt-1 text-gray-600">Our team will review your application and documents. You’ll receive a response within <span className="font-semibold">24 hours</span> via email.</div>
          </li>
        </ol>
        <div className="mt-10">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 text-lg cursor-pointer">
            <a href="/register">Create Account</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
