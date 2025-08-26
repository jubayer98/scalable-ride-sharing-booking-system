/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUsersQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";

export default function ManageUsers() {
  const { data, isLoading, isError } = useGetUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  if (isLoading) {
    return <div className="text-center py-10">Loading users...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-600">Failed to load users.</div>;
  }

  const handleUpdate = async (id: string, field: string, value: any) => {
    try {
      setUpdatingId(id);
      await updateUser({ id, body: { [field]: value } }).unwrap();
      toast.success(`User ${field} updated successfully`);
    } catch (err) {
      toast.error("Failed to update user");
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Manage Users</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Deleted</TableHead>
            {/* <TableHead>Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data
            ?.filter((user) => user.role !== "admin") // ✅ hide admins
            .map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>

                {/* Role */}
                <TableCell>
                  <select
                    className="border rounded p-1"
                    value={user.role}
                    onChange={(e) => handleUpdate(user._id, "role", e.target.value)}
                    disabled={updatingId === user._id}
                  >
                    <option value="user">User</option>
                    <option value="driver">Driver</option>
                    {/* ❌ No Admin here */}
                  </select>
                </TableCell>

                {/* isActive */}
                <TableCell>
                  <select
                    className="border rounded p-1"
                    value={user.isActive}
                    onChange={(e) => handleUpdate(user._id, "isActive", e.target.value)}
                    disabled={updatingId === user._id}
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </TableCell>

                {/* isVerified */}
                <TableCell>
                  <input
                    type="checkbox"
                    checked={user.isVerified}
                    onChange={(e) =>
                      handleUpdate(user._id, "isVerified", e.target.checked)
                    }
                    disabled={updatingId === user._id}
                  />
                </TableCell>

                {/* isDeleted */}
                <TableCell>
                  <input
                    type="checkbox"
                    checked={user.isDeleted}
                    onChange={(e) =>
                      handleUpdate(user._id, "isDeleted", e.target.checked)
                    }
                    disabled={updatingId === user._id}
                  />
                </TableCell>

                {/* Manual action */}
                {/* <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      toast.info(`User details: ${JSON.stringify(user, null, 2)}`)
                    }
                  >
                    View
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
