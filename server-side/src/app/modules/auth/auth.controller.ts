import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import passport from "passport"
import AppError from "../../errorHelpers/AppError"
import { createUserTokens } from "../../utils/userToken"
import { setAuthCookie } from "../../utils/setCookies"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken"
import { authServices } from "./auth.service"

const credentialLogin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    passport.authenticate("local", async (error: any, user: any, info: any) => {

        if (error) {
            return next(new AppError(401, error))
        }

        if (!user) {
            return next(new AppError(401, info.message))
        }

        const userTokens = await createUserTokens(user)

        const { password: pass, ...rest } = user.toObject();

        setAuthCookie(res, userTokens)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            message: "User logged in successfully",
            success: true,
            data: {
                accessToken: userTokens.accessToken,
                refreshToken: userTokens.refreshToken,
                user: rest
            },
        });
    })(req, res, next)
})

const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "User logged out successfully",
        success: true,
        data: null,
    });
});

// change password of the user
const changePassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;
    const decodedToken = req.user;

    await authServices.changePassword(oldPassword, newPassword, decodedToken as JwtPayload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Password change successfully",
        success: true,
        data: null,
    });
});

export const authControllers = {
    credentialLogin,
    logout,
    changePassword
}