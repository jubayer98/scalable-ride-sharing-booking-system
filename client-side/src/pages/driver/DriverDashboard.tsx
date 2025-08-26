/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useGetAvailableRidesQuery, useRespondToRideMutation } from "@/redux/features/ride/ride.api";
import { Button } from "@/components/ui/button";
import Loading from "@/components/layouts/Loading";
import { toast } from "sonner";
import type { IRide } from "@/types";

const rideActions = [
  { label: "ACCEPTED", value: "accept" },
] as const;

type RideActionOption = (typeof rideActions)[number]["value"];

export default function DriverDashboard() {
  // ✅ Fetch available rides
  const { data, isLoading, isError } = useGetAvailableRidesQuery();
  const rides = data?.data || [];

  // ✅ Respond mutation
  const [respondToRide, { isLoading: isResponding }] = useRespondToRideMutation();

  // ✅ Local state for each ride’s selected status
  const [selectedStatus, setSelectedStatus] = React.useState<Record<string, RideActionOption>>({});

  const handleChangeStatus = (rideId: string, status: RideActionOption) => {
    setSelectedStatus((prev) => ({ ...prev, [rideId]: status }));
  };

  const handleRespond = async (rideId: string) => {
    const action = selectedStatus[rideId];
    if (!action) {
      toast.warning("Please select a status before updating.");
      return;
    }

    try {
      await respondToRide({ rideId, action }).unwrap();
      toast.success(`Ride updated: ${action}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update ride status.");
    }
  };


  // ✅ Loading / Error states
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Failed to load available rides.
      </div>
    );

  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-bold text-gray-900">Driver Dashboard - Available Rides</h1>
          <p className="text-sm text-gray-600">Update ride statuses as you progress</p>
        </div>

        {/* Ride List */}
        <div className="space-y-4">
          {rides.length === 0 ? (
            <p className="text-gray-500 text-center">No available rides right now.</p>
          ) : (
            rides.map((ride: IRide) => (
              <div
                key={ride._id}
                className="border rounded-lg p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {ride.pickupLocation.address} → {ride.destinationLocation.address}
                  </p>
                  <p className="text-sm text-gray-600">
                    Requested at:{" "}
                    {new Date(ride.timestamps?.requested || "").toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Current Status: {ride.status}</p>
                </div>

                {/* Status Selector */}
                <div className="flex space-x-2 items-center">
                  <select
                    value={selectedStatus[ride._id] || ""}
                    onChange={(e) =>
                      handleChangeStatus(ride._id, e.target.value as RideActionOption)
                    }
                    className="border rounded-lg px-3 py-2"
                  >
                    <option value="">-- Change Status --</option>
                    {rideActions.map((action) => (
                      <option key={action.value} value={action.value}>
                        {action.label}
                      </option>
                    ))}
                  </select>

                  <Button
                    onClick={() => handleRespond(ride._id)}
                    disabled={isResponding}
                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white"
                  >
                    Update
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
