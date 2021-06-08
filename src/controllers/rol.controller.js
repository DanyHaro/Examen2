import { pool } from '../database'
const helpers = require('../libs/helpers');


//TRAER TODOS
export const readAllrol = async(req, res) => {
    try {
        const response = await pool.query('select *from rol');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}