import { Router } from "express";
import { authControllers } from "./auth.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

router.post("/login", authControllers.credentialLogin);
router.post("/logout", authControllers.logout);
router.post("/change-password", checkAuth(...Object.values(Role)), authControllers.changePassword);

export const authRoutes = router;