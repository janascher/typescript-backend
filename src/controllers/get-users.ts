import { Request, Response } from 'express';
import { pool } from '../configs';

export async function getUser(req: Request, res: Response): Promise<any> {
    try {
        const query = `
            --sql
                SELECT * FROM public.accounts
        `;
        const response = await pool.query(query);
        console.table(response.rows);
        return res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({message: error});
    }
}

