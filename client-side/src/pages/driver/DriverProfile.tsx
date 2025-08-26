/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  useUpdateAvailabilityMutation,
  useUpdateDriverProfileMutation,
  useGetDriverProfileQuery,
} from "@/redux/features/driver/driver.api";
import type { IDriver } from "@/types/driver.type";
import { toast } from "sonner";
import Loading from "@/components/layouts/Loading";

export default function DriverProfile() {
  // ✅ Fetch driver profile
  const { data, isLoading, isError } = useGetDriverProfileQuery();
  const driver = data?.data;

  // ✅ Mutations
  const [updateAvailability, { isLoading: isUpdatingAvailability }] =
    useUpdateAvailabilityMutation();
  const [updateDriverProfile, { isLoading: isUpdatingProfile }] =
    useUpdateDriverProfileMutation();

  // ✅ React Hook Form
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Partial<IDriver>>();

  // ✅ Reset form when driver loads
  React.useEffect(() => {
    if (driver) {
      reset(driver);
    }
  }, [driver, reset]);

  const onSubmit = async (formData: Partial<IDriver>) => {
    try {
      const payload = {
        make: formData.vehicleInfo?.make || "",
        model: formData.vehicleInfo?.model || "",
        year: formData.vehicleInfo?.year || 0,
        licensePlate: formData.vehicleInfo?.licensePlate || "",
      };

      if (!payload.make || !payload.model || !payload.year || !payload.licensePlate) {
        toast.error("All vehicle information fields are required.");
        return;
      }

      await updateDriverProfile(payload).unwrap(); // ✅ no vehicleInfo wrapper
      toast.success("Vehicle info updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update vehicle info.");
    }
  };

  // ✅ Toggle Availability
  const handleToggleAvailability = async () => {
    if (!driver) return;

    // 🚫 Prevent going online if approval is pending
    if (driver.approvalStatus === "pending" && !driver.isOnline) {
      toast.warning("Update your vehicle info first to go online.");
      return;
    }

    try {
      await updateAvailability({ isOnline: !driver.isOnline }).unwrap();
      toast.success(
        driver.isOnline ? "You are now offline" : "You are now online"
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to update availability.");
    }
  };

  // ✅ Loading / Error
  if (isLoading) return <Loading />;
  if (isError || !driver)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Failed to load driver profile.
      </div>
    );

  return (
    <div className="bg-gray-50 px-4 py-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            Driver Profile
          </h1>
          <p className="text-sm text-gray-600">
            Manage your availability, profile details, and vehicle information.
          </p>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center border p-4 rounded-lg bg-gray-50">
          <span>
            <strong>Approval Status:</strong>{" "}
            {driver.approvalStatus === "approved" && "✅ Approved"}
            {driver.approvalStatus === "pending" && (
              <span className="text-yellow-600">
                ⏳ Pending
              </span>
            )}
            {driver.approvalStatus === "suspended" && "❌ Suspended"}
          </span>
          <Button
            onClick={handleToggleAvailability}
            disabled={isUpdatingAvailability}
            className={
              driver.isOnline
                ? "cursor-pointer bg-red-500 hover:bg-red-600"
                : "cursor-pointer bg-green-500 hover:bg-green-600"
            }
          >
            {driver.isOnline ? "Go Offline" : "Go Online"}
          </Button>
        </div>

        {/* Vehicle Form (one form) */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <h2 className="text-lg font-semibold text-gray-900 pt-6 border-t">
            Vehicle Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Make
              </label>
              <input
                type="text"
                {...register("vehicleInfo.make")}
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <input
                type="text"
                {...register("vehicleInfo.model")}
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="number"
                {...register("vehicleInfo.year", { valueAsNumber: true })}
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                License Plate
              </label>
              <input
                type="text"
                {...register("vehicleInfo.licensePlate")}
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>
          </div>

          {/* Save Button */}
          <Button
            type="submit"
            disabled={isUpdatingProfile}
            className="cursor-pointer w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            {isUpdatingProfile ? "Updating..." : "Save Vehicle Info"}
          </Button>
        </form>
      </div>
    </div>
  );
}
