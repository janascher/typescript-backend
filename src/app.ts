import express from 'express';
import router from './routes/index';

export class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(router);
    }
}
