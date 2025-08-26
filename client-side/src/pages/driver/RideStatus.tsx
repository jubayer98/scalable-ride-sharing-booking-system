/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  useGetRidesByAssignedDriverQuery,
  useUpdateRideStatusMutation,
} from "@/redux/features/ride/ride.api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Loading from "@/components/layouts/Loading";

const rideStages = [
  { label: "PICKED_UP", value: "picked_up" },
  { label: "IN_TRANSIT", value: "in_transit" },
  { label: "COMPLETED", value: "completed" },
] as const;

type RideStage = (typeof rideStages)[number]["value"];

export default function RideStatus() {
  const { data, isLoading, isError } = useGetRidesByAssignedDriverQuery();
  const [statusMap, setStatusMap] = React.useState<Record<string, RideStage | "">>({});
  const [amountMap, setAmountMap] = React.useState<Record<string, number | "">>({});
  const [updateRideStatus, { isLoading: isUpdating }] = useUpdateRideStatusMutation();

  if (isLoading) return <Loading />;
  if (isError || !data?.data) {
    return <div className="text-red-600">❌ Failed to load assigned rides.</div>;
  }

  // ✅ only show rides that are not yet completed
  const rides = data.data.filter((ride) => ride.status !== "completed");

  const handleUpdate = async (rideId: string) => {
    const status = statusMap[rideId];
    const amount = amountMap[rideId];

    if (!status) {
      toast.warning("Please select a status");
      return;
    }

    // ✅ stricter validation for completed rides
    if (status === "completed") {
      if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
        toast.warning("Please enter a valid amount greater than 0");
        return;
      }
    }

    try {
      await updateRideStatus({
        rideId,
        status,
        amount: status === "completed" ? Number(amount) : undefined,
      }).unwrap();

      toast.success(`Ride updated to ${status.toUpperCase()}`);
      setStatusMap((prev) => ({ ...prev, [rideId]: "" }));
      setAmountMap((prev) => ({ ...prev, [rideId]: "" }));
    } catch (error) {
      console.error(error);
      toast.error("Failed to update ride status");
    }
  };


  return (
    <div className="space-y-6">
      {/* ✅ Page Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">🚖 Ride Status</h1>
        <p className="text-sm text-gray-600">
          Manage and update the status of your ongoing rides.
        </p>
      </div>

      {rides.length === 0 ? (
        <div className="text-gray-500 text-center">No active rides found.</div>
      ) : (
        rides.map((ride) => (
          <div
            key={ride._id}
            className="border rounded-lg p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
          >
            <div>
              <h2 className="font-semibold">Ride ID: {ride._id}</h2>
              <p className="text-sm">Status: {ride.status.toUpperCase()}</p>
              <p className="text-sm">
                {ride.pickupLocation.address} → {ride.destinationLocation.address}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={statusMap[ride._id] || ""}
                onChange={(e) =>
                  setStatusMap((prev) => ({
                    ...prev,
                    [ride._id]: e.target.value as RideStage,
                  }))
                }
                className="border rounded-lg px-3 py-2"
              >
                <option value="">-- Change Status --</option>
                {rideStages.map((stage) => (
                  <option key={stage.value} value={stage.value}>
                    {stage.label}
                  </option>
                ))}
              </select>

              {statusMap[ride._id] === "completed" && (
                <input
                  type="number"
                  placeholder="Amount"
                  min={1} // ✅ enforce positive numbers only
                  value={amountMap[ride._id] || ""}
                  onChange={(e) =>
                    setAmountMap((prev) => ({
                      ...prev,
                      [ride._id]: Number(e.target.value),
                    }))
                  }
                  className="border rounded-lg px-3 py-2 w-28"
                />
              )}

              <Button
                onClick={() => handleUpdate(ride._id)}
                disabled={isUpdating}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white"
              >
                {isUpdating ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
