import { NextFunction, Request, Response } from "express";

import AppError from "../errorHelpers/AppError";
import { EnvVars } from "../config/env";

// handling global error through out global scope of the application
export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = "Internal server error";

    if (error instanceof AppError) {
        statusCode = error.statusCode
        message = error.message
    } else if (error instanceof Error) {
        statusCode = 500;
        message = error.message;
    }

    res.status(statusCode).json({
        success: false,
        message,
        error,
        stack: EnvVars.NODE_ENV === 'development' ? error.stack : null,
    });
}