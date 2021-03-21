import App from './app';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Run the app.
 */
let main = async (): Promise<void> => {
    const app = new App({
        port: process.env.PORT || 4000,
        host: process.env.HOST
    });
    await app.listen();
}

main();