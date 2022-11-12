import { IRegUserData } from '../models/index';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { IUserData } from '../models';

export function generateUUID(req: Request, res: Response) {
    const userData: IUserData = req.body;
    const regUserData: IRegUserData = { ...userData, id: uuid() };

    return res.json(regUserData);
}