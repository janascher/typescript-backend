import { Request, Response } from 'express';
import { IUserData, IAPIResponse } from '../models/index';
import { pool } from '../configs';

export async function createUser(req: Request, res: Response):Promise<any> {
    const userData: IUserData = req.body;
    try {
        const query = `
            --sql
                INSERT INTO public.accounts (name, email, password)
                VALUES ($1, $2, $3)
                RETURNING *
        `;
        const response = await pool.query(query, [
            userData.name,
            userData.email,
            userData.password,
        ]);

        console.table(response.rows);
        return res.status(200).json('User created sucessfully!');
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
