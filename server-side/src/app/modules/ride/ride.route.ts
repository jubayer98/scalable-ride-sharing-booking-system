import { Router } from "express";
import { riderControllers } from "./ride.controller";
import { Role } from "../user/user.interface";
import { checkAuth } from "../../middlewares/checkAuth";


const router = Router();

router.post("/request", checkAuth(Role.USER), riderControllers.requestRide);
router.get("/history", checkAuth(Role.USER), riderControllers.getRideHistory);
router.patch("/cancel/:id", checkAuth(Role.USER), riderControllers.cancelRide);

export const rideRoutes = router;