import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";
import { userControllers } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";

const router = Router();

router.post("/register", validateRequest(createUserZodSchema), userControllers.createUser);
router.get("/me", checkAuth(...Object.values(Role)), userControllers.getMe);
router.patch("/:id", checkAuth(...Object.values(Role)), userControllers.updateUser);

export const userRoutes = router;