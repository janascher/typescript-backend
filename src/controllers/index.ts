import { RegUserData } from './../models/index';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { UserData } from '../models';

export function takeUUID(req: Request, res: Response) {
    const userData: UserData = req.body;
    const regUserData: RegUserData = { ...userData, id: uuid() };

    return res.json(regUserData);
}