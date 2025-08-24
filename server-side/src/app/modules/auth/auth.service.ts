import { JwtPayload } from "jsonwebtoken";
import { userModel } from "../user/user.model";
import { EnvVars } from "../../config/env";
import httpStatus from "http-status-codes";
import bcryptjs from "bcrypt";
import AppError from "../../errorHelpers/AppError";

// change password service
const changePassword = async (oldPassword: string, newPassword: string, decodedToken: JwtPayload) => {

    const user = await userModel.findById(decodedToken.userId);

    const isOldPasswordMatched = await bcryptjs.compare(oldPassword, user!.password as string);

    if (!isOldPasswordMatched) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Old password is incorrect");
    }

    user!.password = await bcryptjs.hash(newPassword, parseInt(EnvVars.BCRYPT_SALT_ROUND));
    user!.save();
}

export const authServices = {
    //getNewAccessToken,
    changePassword,
    //resetPassword,
    //forgotPassword
};