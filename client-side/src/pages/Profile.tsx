/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CityRideLogo from "@/assets/icons/Logo";
import { useUserInfoQuery, useChangePasswordMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Loading from "@/components/layouts/Loading";
import type { IRole } from "@/types/role.type";
import { useUpdateUserMutation } from "@/redux/features/user/user.api";
import { useNavigate } from "react-router-dom";

type ProfileFormData = {
    name: string;
    email?: string;
    phone?: string;
    role?: IRole;
};

type ChangePasswordFormData = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};

export default function Profile() {
    const navigate = useNavigate();
    // ✅ Query user info
    type UserInfo = {
        _id?: string;
        name?: string;
        email?: string;
        phone?: string;
        role?: IRole;
        createdAt?: string;
    };

    type UserInfoResponse = {
        data?: UserInfo;
    };

    const { data: userInfo, isLoading, isError } = useUserInfoQuery(undefined) as {
        data?: UserInfoResponse;
        isLoading: boolean;
        isError: boolean;
    };

    const [changePassword, { isLoading: isChanging }] = useChangePasswordMutation();
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProfileFormData>();

    const {
        register: registerPassword,
        handleSubmit: handlePasswordSubmit,
        watch,
        formState: { errors: passwordErrors },
        reset: resetPasswordForm,
    } = useForm<ChangePasswordFormData>();

    // ✅ Reset form when userInfo is fetched
    React.useEffect(() => {
        if (userInfo?.data) {
            reset({
                name: userInfo.data.name || "",
                email: userInfo.data.email || "",
                phone: userInfo.data.phone || "",
            });
        }
    }, [userInfo, reset]);

    // profile submit handler
    const onProfileSubmit = async (data: ProfileFormData) => {
        try {
            await updateUser({
                id: userInfo?.data?._id || "", // ✅ use the actual user id
                body: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                },
            }).unwrap();

            toast.success("Profile updated successfully!");
        } catch (err: any) {
            toast.error(err?.data?.message || "Failed to update profile");
        }
    };


    const onPasswordSubmit = async (data: ChangePasswordFormData) => {
        if (data.newPassword !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            await changePassword({
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            }).unwrap();

            toast.success("Password changed successfully!");
            resetPasswordForm();
        } catch (err: any) {
            toast.error(err?.data?.message || "Failed to change password");
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        // optional: clear token/localStorage/session
        localStorage.removeItem("accessToken");
        navigate("/login");
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 space-y-10">
                {/* Header */}
                <div className="text-center">
                    <CityRideLogo width={120} height={60} className="mx-auto" />
                    <h1 className="mt-4 text-2xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-sm text-gray-600">
                        Manage your personal information and account settings.
                    </p>
                </div>

                {/* Profile Form */}
                <form onSubmit={handleSubmit(onProfileSubmit)} className="space-y-6">
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

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="phone"
                            {...register("phone")}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Role (read-only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <input
                            type="text"
                            value={userInfo?.data?.role ? userInfo.data.role : ''}
                            disabled
                            className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 text-gray-500"
                        />
                    </div>

                    {/* Account Info */}
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

                    <Button
                        type="submit"
                        size="lg"
                        disabled={isUpdating}
                        className="cursor-pointer w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                        {isUpdating ? "Saving..." : "Save Profile Changes"}
                    </Button>
                </form>

                {/* Password Update Form */}
                <form
                    onSubmit={handlePasswordSubmit(onPasswordSubmit)}
                    className="space-y-6 border-t pt-6"
                >
                    <h2 className="text-lg font-semibold text-gray-900">
                        Change Password
                    </h2>

                    {/* Old Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Old Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...registerPassword("oldPassword", {
                                required: "Old password is required",
                            })}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {passwordErrors.oldPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {passwordErrors.oldPassword.message}
                            </p>
                        )}
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...registerPassword("newPassword", {
                                required: "New password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {passwordErrors.newPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {passwordErrors.newPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...registerPassword("confirmPassword", {
                                validate: (value) =>
                                    value === watch("newPassword") || "Passwords do not match",
                            })}
                            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {passwordErrors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {passwordErrors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        disabled={isChanging}
                        className="cursor-pointer w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                        {isChanging ? "Changing Password..." : "Change Password"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
