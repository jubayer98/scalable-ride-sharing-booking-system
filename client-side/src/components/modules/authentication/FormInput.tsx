import { type FieldError } from "react-hook-form";

type FormInputProps = {
    label: string;
    type?: string;
    placeholder?: string;
    registration: object; // register() return type is an object, not a function
    error?: FieldError;
};

export default function FormInput({
    label,
    type = "text",
    placeholder,
    registration,
    error,
}: FormInputProps) {

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                {...registration} // ✅ Spread the object returned from register()
                placeholder={placeholder}
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error.message}</p>
            )}
        </div>
    );
}
