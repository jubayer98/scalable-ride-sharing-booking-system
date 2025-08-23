import dotenv from 'dotenv';
dotenv.config();

interface EnvVars {
    PORT: string;
    MONGODB_URI: string;
    NODE_ENV: "development" | "production";
    FRONTEND_URL: string;

    JWT_ACCESS_TOKEN_SECRET: string;
    JWT_ACCESS_TOKEN_EXPIRATION: string;
    JWT_REFRESH_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_EXPIRATION: string;

    BCRYPT_SALT_ROUND: string;

    INITIAL_ADMIN_EMAIL: string;
    INITIAL_ADMIN_PASSWORD: string;
}

const loadEnvVars = (): EnvVars => {
    const requiredEnvVars: string[] = ['PORT', 'MONGODB_URI', 'NODE_ENV', 'FRONTEND_URL', 'BCRYPT_SALT_ROUND', 'INITIAL_ADMIN_EMAIL', 'INITIAL_ADMIN_PASSWORD', 'JWT_ACCESS_TOKEN_SECRET', 'JWT_ACCESS_TOKEN_EXPIRATION', 'JWT_REFRESH_TOKEN_SECRET', 'JWT_REFRESH_TOKEN_EXPIRATION'];

    requiredEnvVars.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    })

    return {
        PORT: process.env.PORT as string,
        MONGODB_URI: process.env.MONGODB_URI as string,
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
        FRONTEND_URL: process.env.FRONTEND_URL as string,

        JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET as string,
        JWT_ACCESS_TOKEN_EXPIRATION: process.env.JWT_ACCESS_TOKEN_EXPIRATION as string,
        JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET as string,
        JWT_REFRESH_TOKEN_EXPIRATION: process.env.JWT_REFRESH_TOKEN_EXPIRATION as string,

        BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
        
        INITIAL_ADMIN_EMAIL: process.env.INITIAL_ADMIN_EMAIL as string,
        INITIAL_ADMIN_PASSWORD: process.env.INITIAL_ADMIN_PASSWORD as string,
    }

}

export const EnvVars = loadEnvVars();