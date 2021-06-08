import { pool } from '../database'
const helpers = require('../libs/helpers');


//TRAER TODOS
export const readAllusuario = async(req, res) => {
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


//CREAR
export const createUsuario = async(req, res) => {
    try {
        const { idempleado, idrol, username, contra, estado } = req.body;

        //ENCRYPTAMOS
        const passwordEncrypt = await helpers.encryptPassword(contra);

        await pool.query('insert into usuario (idempleado, idrol, username,contra,estado) values($1,$2,$3,$4,$5)', [idempleado, idrol, username, passwordEncrypt, estado]);
        return res.status(200).json(
            `Usuario ${ nombres } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}