
import { useState } from "react";

const EMERGENCY_EMAIL = "emergency-contact@example.com"; // Replace with real contact
const EMAIL_SUBJECT = encodeURIComponent("Emergency Alert: Need Help!");
const EMAIL_BODY = encodeURIComponent(
  "I am in an emergency situation. Please contact me as soon as possible. This message was sent automatically from the ride-sharing app."
);

export default function Emergency() {
  const [showOptions, setShowOptions] = useState(false);

  // For demo: share live location via navigator.geolocation
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
          window.open(mapsUrl, "_blank");
        },
        () => {
          alert("Unable to access your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-xl mt-16 text-center animate-fade-in">
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 animate-pulse shadow">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-red-700 tracking-tight">Emergency Options</h1>
        <p className="text-gray-600 text-sm">Quickly access help in case of emergency</p>
      </div>
      <button
        className="transition bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full font-semibold mb-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={() => setShowOptions((v) => !v)}
      >
        {showOptions ? "Hide Options" : "Show Emergency Options"}
      </button>
      {showOptions && (
        <div className="flex flex-col gap-5 items-center mt-2 animate-fade-in">
          <a
            href="tel:999"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full text-center shadow transition transform hover:scale-105"
          >
            <span className="text-2xl">🚨</span>
            <span className="font-bold">Call Police</span>
          </a>
          <a
            href={`mailto:${EMERGENCY_EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
            className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg w-full text-center shadow transition transform hover:scale-105"
          >
            <span className="text-2xl">📧</span>
            <span className="font-bold">Notify Emergency Contact</span>
          </a>
          <button
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full shadow transition transform hover:scale-105"
            onClick={handleShareLocation}
          >
            <span className="text-2xl">📍</span>
            <span className="font-bold">Share Live Location</span>
          </button>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
