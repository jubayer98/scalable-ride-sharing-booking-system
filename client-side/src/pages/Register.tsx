/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/modules/authentication/FormInput";
import CityRideLogo from "@/assets/icons/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function Register() {
    const [registerUser, { isLoading }] = useRegisterMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            }).unwrap();

            toast.success("Registration successful!");
            navigate("/login");
        } catch (err: any) {
            toast.error(err?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
                {/* Logo + Title */}
                <div className="text-center">
                    <CityRideLogo width={100} height={60} className="mx-auto" />
                    <h1 className="mt-4 text-2xl font-bold text-gray-900">Register</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <FormInput
                        label="Full Name"
                        placeholder="John Doe"
                        registration={register("name", { required: "Name is required" })}
                        error={errors.name}
                    />

                    <FormInput
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        registration={register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Invalid email format",
                            },
                        })}
                        error={errors.email}
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        registration={register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        error={errors.password}
                    />

                    <FormInput
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                        registration={register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                        error={errors.confirmPassword}
                    />

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                        {isLoading ? "Registering..." : "Register"}
                    </Button>
                </form>

                {/* Footer */}
                <div className="text-sm text-center text-gray-600">
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
