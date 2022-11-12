import { IUserData, IRegUserData } from './../models/index';
import { Request, Response } from 'express';
import { pool } from '../configs';

export async function updateUser(req: Request, res: Response):Promise<any> {
    /* const id: number = req.body; */
    /* const userData: IUserData = req.body; */
    const regUserData: IRegUserData = req.body;
    console.log(regUserData)
    try {
        const query = `
            --sql
            UPDATE public.accounts SET 
                name = $1, 
                email = $2, 
                password = $3,
                updated_at = now()
            WHERE id = $4
            RETURNING *
        `;
        const response = await pool.query(query, [
            regUserData.name,
            regUserData.email,
            regUserData.password,
            regUserData.id,
        ]);
        console.log(response)
        console.table(response.rows);
        return res.status(201).json(`User updated sucessfully!`);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
