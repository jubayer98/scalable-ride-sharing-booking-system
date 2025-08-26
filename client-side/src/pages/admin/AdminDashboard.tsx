import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Car, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Hero / Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Admin Dashboard 🚀
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From here, you can <span className="font-semibold">manage users</span>,
          oversee <span className="font-semibold">rides</span>, and review
          <span className="font-semibold">analytics</span>. Everything you need
          to keep <span className="text-blue-600">CityRide</span> running
          smoothly, in one place.
        </p>
      </div>

      {/* Quick Action Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Manage Users */}
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader>
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Manage Users</CardTitle>
          </CardHeader>
          <CardContent>
            Add, suspend, or review user accounts and driver applications.
          </CardContent>
        </Card>

        {/* Manage Rides */}
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader>
            <Car className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Manage Rides</CardTitle>
          </CardHeader>
          <CardContent>
            Track ride statuses, handle disputes, and monitor ongoing rides.
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardHeader>
            <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            View ride volume, revenue insights, and driver performance trends.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
