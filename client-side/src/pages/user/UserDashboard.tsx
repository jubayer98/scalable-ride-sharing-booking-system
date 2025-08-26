/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetRideHistoryQuery, useCancelRideMutation } from "@/redux/features/ride/ride.api";
import { toast } from "sonner";
import Loading from "@/components/layouts/Loading";

export default function UserDashboard() {
  const { data, isLoading, isError } = useGetRideHistoryQuery();
  const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();

  if (isLoading) return <Loading />;
  if (isError || !data?.data) {
    return <div className="text-red-600">❌ Failed to load ride history.</div>;
  }

  const rides = data.data.filter((r) => r.status === "requested");

  const handleCancel = async (rideId: string) => {
    toast("Are you sure you want to cancel this ride?", {
      action: {
        label: "Yes, Cancel",
        onClick: async () => {
          try {
            await cancelRide({ id: rideId }).unwrap();
            toast.success("Ride cancelled successfully.");
          } catch (error: any) {
            toast.error(error?.data?.message || "Failed to cancel ride");
          }
        },
      },
      cancel: {
        label: "No, Keep Ride",
        onClick: () => {},
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Requested Rides</h1>
      {rides.length === 0 ? (
        <div className="text-gray-500 text-center">No requested rides.</div>
      ) : (
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Pickup</th>
              <th className="py-2 px-4 text-left">Destination</th>
              <th className="py-2 px-4 text-left">Requested At</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr key={ride._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{ride.pickupLocation.address}</td>
                <td className="py-2 px-4">{ride.destinationLocation.address}</td>
                <td className="py-2 px-4">{ride.timestamps?.requested ? new Date(ride.timestamps.requested).toLocaleString() : "-"}</td>
                <td className="py-2 px-4">
                  <button
                    className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => handleCancel(ride._id)}
                    disabled={isCancelling}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
