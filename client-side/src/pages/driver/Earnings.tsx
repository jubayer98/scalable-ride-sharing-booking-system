import React from "react";
import { useGetDriverEarningsHistoryQuery } from "@/redux/features/driver/driver.api";
import Loading from "@/components/layouts/Loading";

export default function Earnings() {
  const { data, isLoading, isError } = useGetDriverEarningsHistoryQuery();

  if (isLoading) return <Loading />;
  if (isError || !data?.data) {
    return <div className="text-red-600">❌ Failed to load earnings history.</div>;
  }

  const earnings = data.data;
  const total = earnings.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Earnings History</h1>
      <div className="mb-6 text-center">
        <span className="text-lg font-semibold">Total Earnings: </span>
        <span className="text-2xl text-green-600 font-bold">৳{total}</span>
      </div>
      {earnings.length === 0 ? (
        <div className="text-gray-500 text-center">No earnings yet.</div>
      ) : (
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Ride ID</th>
              <th className="py-2 px-4 text-left">Amount (৳)</th>
              <th className="py-2 px-4 text-left">Completed At</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((e) => (
              <tr key={e.rideId} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 font-mono text-xs">{e.rideId}</td>
                <td className="py-2 px-4 text-green-700 font-semibold">৳{e.amount}</td>
                <td className="py-2 px-4">{new Date(e.completedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
