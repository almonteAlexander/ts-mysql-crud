
import express, { application, Application } from 'express';
import IAppSettings from './interface/AppSettings'
import IndexRouter from './routes/index.routes';
import PostsRouter from './routes/posts.routes';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

export default class App{

    app     : Application = application;

    /**
     * 
     * @param {object} settings An object with the app settings.
     */
    constructor(private settings: IAppSettings){
        this.app = express(); 
        this.setSettings();
        this.useMiddlewares();
    }
    
    /**
     * Set the settings of the app.
     */
    setSettings(): void{
        this.app.set('port', this.settings.port || process.env.PORT || '4000');
        this.app.set('host', this.settings.host || process.env.HOST || 'localhost');   
    }

    /**
     * Initializes the use of app middlewares.
     */
    useMiddlewares(): void{
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(IndexRouter);
        this.app.use('/posts', PostsRouter);
    }

    /**
     * Initialize the app.
     */
    async listen(): Promise<void>{
        await this.app.listen(this.app.get('port'), this.app.get('host'));
        console.log(`Server On Port ${this.app.get('port')}!`);
    }
}