import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import router from './routes/task.routes';

export class App {
    app:express.Application = express();
    
    constructor() {
        this.settings();
        this.middlewares();
        this.initRoutes();
        this.listenServer();
    }

    private settings(): void {
        this.app.set('port', 3001);
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors())
    }

    private initRoutes(): void {
        this.app.use(router);
    }

    private async listenServer():   Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log(`server is tuning in the port ${this.app.get('port')}`);
    }
}