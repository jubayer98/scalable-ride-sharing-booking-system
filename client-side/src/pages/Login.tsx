/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CityRideLogo from "@/assets/icons/Logo";
import FormInput from "@/components/modules/authentication/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

type LoginFormData = {
    email: string;
    password: string;
};

export default function Login() {
    const [loginUser, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        try {
            await loginUser(data).unwrap();
            toast.success("Login successful!");
            navigate("/me"); // redirect based on role if needed
        } catch (err: any) {
            toast.error(err?.data?.message || "Invalid credentials");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
                {/* Logo + Title */}
                <div className="text-center">
                    <CityRideLogo width={100} height={60} className="mx-auto" />
                    <h1 className="mt-4 text-2xl font-bold text-gray-900">Login</h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                        {isLoading ? "Logging in..." : "Login"}
                        
                    </Button>
                </form>

                {/* Footer */}
                <div className="text-sm text-center text-gray-600">
                    <p>
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
