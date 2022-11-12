import { Request, Response } from 'express';

class HomeController {
    public home(req: Request, res: Response) {
        return res.json({ response: 'Bem-vindo(a)!' });
    }
}

export const homeController = new HomeController();
