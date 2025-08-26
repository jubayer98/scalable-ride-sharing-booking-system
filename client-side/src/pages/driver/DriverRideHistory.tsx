/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetRidesByAssignedDriverQuery } from "@/redux/features/ride/ride.api";
import Loading from "@/components/layouts/Loading";

export default function DriverRideHistory() {
  const { data, isLoading, isError } = useGetRidesByAssignedDriverQuery();

  if (isLoading) return <Loading />;
  if (isError || !data?.data) {
    return (
      <div className="text-red-600 text-center">❌ Failed to load ride history.</div>
    );
  }

  // ✅ filter only completed rides
  const rides = data.data.filter((ride) => ride.status === "completed");

  return (
    <div className="space-y-6">
      {/* ✅ Page Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">📜 Ride History</h1>
        <p className="text-sm text-gray-600">
          All your completed rides and earnings details.
        </p>
      </div>

      {rides.length === 0 ? (
        <div className="text-gray-500 text-center">No completed rides yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Ride ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Route</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Requested</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Accepted</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Completed</th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride) => (
                <tr key={ride._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm border-b">{ride._id}</td>
                  <td className="px-4 py-2 text-sm border-b">
                    {ride.pickupLocation.address} → {ride.destinationLocation.address}
                  </td>
                  <td className="px-4 py-2 text-sm border-b">
                    {ride.timestamps?.requested
                      ? new Date(ride.timestamps.requested).toLocaleString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm border-b">
                    {ride.timestamps?.accepted
                      ? new Date(ride.timestamps.accepted).toLocaleString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm border-b">
                    {ride.timestamps?.completed
                      ? new Date(ride.timestamps.completed).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
