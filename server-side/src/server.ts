import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import { EnvVars } from './app/config/env';
import { seedInitialAdmin } from './app/utils/seedInitialAdmin';

let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect(EnvVars.MONGODB_URI);
        console.log('Connected to City Ride Database');

        server = app.listen(EnvVars.PORT, () => {
            console.log(`Server is running on http://localhost:${EnvVars.PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

(async () => {
    await startServer();
    await seedInitialAdmin();
})();

process.on(("unhandledRejection"), (error) => {
    console.error('Unhandled Rejection: Shutting down the server...', error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
})

process.on(("uncaughtException"), (error) => {
    console.error('Uncaught Exception: Shutting down the server...', error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
})

process.on(("SIGTERM"), (error) => {
    console.error('SIGTERM Signal Received: Shutting down the server...', error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
})