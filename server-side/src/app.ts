import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import passport from "passport";
import "./app/config/passport";
import { EnvVars } from './app/config/env';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.set("trust proxy", 1);

app.use(cors({
    origin: EnvVars.FRONTEND_URL,
    credentials: true
}));

// Initialize Passport (JWT mode only)
app.use(passport.initialize());

app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome to the City Ride System',
    });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
