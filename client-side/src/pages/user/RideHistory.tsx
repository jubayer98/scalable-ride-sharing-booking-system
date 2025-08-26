
import { useGetRideHistoryQuery } from "@/redux/features/ride/ride.api";
import Loading from "@/components/layouts/Loading";

const statusColors: Record<string, string> = {
  requested: "bg-blue-100 text-blue-700",
  accepted: "bg-green-100 text-green-700",
  picked_up: "bg-yellow-100 text-yellow-700",
  in_transit: "bg-purple-100 text-purple-700",
  completed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function RideHistory() {
  const { data, isLoading, isError } = useGetRideHistoryQuery();

  if (isLoading) return <Loading />;
  if (isError || !data?.data) {
    return <div className="text-red-600">❌ Failed to load ride history.</div>;
  }

  const rides = data.data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Ride History</h1>
      {rides.length === 0 ? (
        <div className="text-gray-500 text-center">No rides found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Pickup</th>
                <th className="py-2 px-4 text-left">Destination</th>
                <th className="py-2 px-4 text-left">Requested At</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride) => (
                <tr key={ride._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{ride.pickupLocation.address}</td>
                  <td className="py-2 px-4">{ride.destinationLocation.address}</td>
                  <td className="py-2 px-4">{ride.timestamps?.requested ? new Date(ride.timestamps.requested).toLocaleString() : "-"}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[ride.status] || "bg-gray-200 text-gray-700"}`}>
                      {ride.status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
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
