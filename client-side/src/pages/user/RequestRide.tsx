/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { useRequestRideMutation } from "@/redux/features/ride/ride.api";
import { toast } from "sonner";

// For demo: use browser geolocation and text input for address
export default function RequestRide() {
  const [pickupLocation, setPickupLocation] = useState<{ lat: number; lng: number; address?: string } | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<{ lat: number; lng: number; address?: string } | null>(null);
  const [pickupInput, setPickupInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [requestRide, { isLoading }] = useRequestRideMutation();

  // Simulate map search: use browser geolocation for pickup, manual for destination
  const handleUseMyLocation = async () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPickupLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          address: "My Current Location",
        });
        setPickupInput("My Current Location");
      },
      () => toast.error("Failed to get your location."),
    );
  };

  const handleRequestRide = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation || !destinationLocation) {
      toast.warning("Please select both pickup and destination locations.");
      return;
    }
    try {
      await requestRide({ pickupLocation, destinationLocation }).unwrap();
      toast.success("Ride requested successfully!");
      setPickupLocation(null);
      setDestinationLocation(null);
      setPickupInput("");
      setDestinationInput("");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to request ride");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Request a Ride</h1>
      <form onSubmit={handleRequestRide} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Pickup Location</label>
          <div className="flex-col space-y-2">
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter pickup address"
              value={pickupInput}
              onChange={(e) => setPickupInput(e.target.value)}
              onBlur={() => {
                if (pickupInput) setPickupLocation({ ...pickupLocation, address: pickupInput, lat: pickupLocation?.lat || 0, lng: pickupLocation?.lng || 0 });
              }}
            />
            <button
              type="button"
              className="w-full cursor-pointer bg-blue-500 text-white px-3 py-2 rounded"
              onClick={handleUseMyLocation}
            >
              Use My Current Location
            </button>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Destination Location</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter destination address"
            value={destinationInput}
            onChange={(e) => setDestinationInput(e.target.value)}
            onBlur={() => {
              if (destinationInput) setDestinationLocation({ address: destinationInput, lat: 0, lng: 0 });
            }}
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Requesting..." : "Request Ride"}
        </button>
      </form>
      <div className="mt-6 text-xs text-gray-500 text-center">
      </div>
    </div>
  );
}
