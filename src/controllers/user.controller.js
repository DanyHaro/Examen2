import { pool } from '../database'
const helpers = require('../libs/helpers');



export const readAllUsers = async(req, res) => {
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const readUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuario where idpersona=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}
export const delUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idpersona=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } Se ha eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}
export const updateUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombres, correo, telefono } = req.body;
        await pool.query('update usuario set nombres=$1, correo=$2, telefono=$3 where idpersona=$4', [nombres, correo, telefono, id]);
        return res.status(200).json(
            `Usuario ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createUser = async(req, res) => {
    try {
        const { nombres, correo, telefono } = req.body;

        //ENCRYPTAMOS
        const correoElectronico = await helpers.encryptPassword(correo);

        await pool.query('insert into usuario (nombres, correo, telefono) values($1,$2,$3)', [nombres, correoElectronico, telefono]);
        return res.status(200).json(
            `Usuario ${ nombres } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}