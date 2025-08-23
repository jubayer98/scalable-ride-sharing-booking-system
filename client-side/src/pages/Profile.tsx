import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CityRideLogo from "@/assets/icons/Logo";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Loading from "@/components/layouts/Loading";

type ProfileFormData = {
    name: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
};

export default function Profile() {
    // ✅ Query user info
    type UserInfo = {
        name?: string;
        email?: string;
        createdAt?: string;
        // Add other fields as needed
    };

    type UserInfoResponse = {
        data?: UserInfo;
        // Add other fields as needed
    };

    const { data: userInfo, isLoading, isError } = useUserInfoQuery(undefined) as {
        data?: UserInfoResponse;
        isLoading: boolean;
        isError: boolean;
    };

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<ProfileFormData>();

    // ✅ Reset form when userInfo is fetched
    React.useEffect(() => {
        if (userInfo?.data) {
            reset({
                name: userInfo.data.name || "",
                email: userInfo.data.email || "",
                phone: "", // fallback until API provides phone
            });
        }
    }, [userInfo, reset]);

    const onSubmit = (data: ProfileFormData) => {
        console.log("Updated Profile:", data);
        toast.success("Profile updated successfully!");
    };

    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }

    if (isError) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600">
                Failed to load profile. Please try again later.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 space-y-8">
                {/* Header */}
                <div className="text-center">
                    <CityRideLogo width={120} height={60} className="mx-auto" />
                    <h1 className="mt-4 text-2xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-sm text-gray-600">
                        Manage your personal information and account settings.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email (read-only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            disabled
                            className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 text-gray-500"
                        />
                    </div>

                    {/* Phone */}
                    {/* <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            {...register("phone")}
                            placeholder="+880123456789"
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div> */}

                    {/* Account Info (read-only extra fields) */}
                    {userInfo?.data?.createdAt && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Member Since
                            </label>
                            <input
                                type="text"
                                value={new Date(userInfo.data.createdAt).toLocaleDateString()}
                                disabled
                                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 text-gray-500"
                            />
                        </div>
                    )}

                    {/* Password Update */}
                    <div className="border-t pt-6 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Change Password
                        </h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                {...register("confirmPassword", {
                                    validate: (value) =>
                                        value === watch("password") || "Passwords do not match",
                                })}
                                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Save Changes
                    </Button>
                </form>
            </div>
        </div>
    );
}
