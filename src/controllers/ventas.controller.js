import { pool } from '../database'
const helpers = require('../libs/helpers');




//TRAER TODOS
export const readAllventas = async(req, res) => {
    try {
        const response = await pool.query('select *from venta');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}



//TRAER UNO POR ID
export const readVenta = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from venta where idventa=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


//ELIMINAR
export const deleteVenta = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from venta where idventa=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } Se ha eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


//MODIFICAR
export const updateVenta = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { idcliente, idusuario, fecha, tipodoc, numerodoc } = req.body;
        await pool.query('update venta set idcliente=$1, idusuario=$2, fecha=$3, tipodoc=$4, numerodoc=$5 where idventa=$6', [idcliente, idusuario, fecha, tipodoc, numerodoc, id]);
        return res.status(200).json(
            `Usuario ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}




//CREAR
export const createVenta = async(req, res) => {
    try {
        const { idcliente, idusuario, fecha, tipodoc, numerodoc } = req.body;

        // //ENCRYPTAMOS
        // const correoElectronico = await helpers.encryptPassword(correo);

        await pool.query('insert into venta (idcliente, idusuario, fecha, tipodoc, numerodoc) values($1,$2,$3,$4,$5)', [idcliente, idusuario, fecha, tipodoc, numerodoc]);
        return res.status(200).json(
            `Usuario ${ numerodoc } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}